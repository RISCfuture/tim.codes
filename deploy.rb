require 'fileutils'
require 'etc'

paths = %w[base en].map { |p| File.join('src', 'i18n', 'strings', p) }

LIVE_NAME = 'private.ts'.freeze
DEPLOY_NAME = 'private.deploy.ts'.freeze
INTERNAL_NAME = 'private.internal.ts'.freeze

live_files     = paths.map { |p| File.join(p, LIVE_NAME) }
deploy_files   = paths.map { |p| File.join(p, DEPLOY_NAME) }
internal_files = paths.map { |p| File.join(p, INTERNAL_NAME) }

def move(files, name)
  files.each do |f|
    FileUtils.mv f, File.join(File.dirname(f), name)
  end
end

begin
  puts "* Moving deploy files"
  move(live_files, INTERNAL_NAME)
  move(deploy_files, LIVE_NAME)

  puts "* Hard reset of deploy branch"
  Dir.chdir('deploy') do
    system 'git', 'fetch'
    system 'git', 'checkout', 'gh-pages'
    system 'git', 'reset', '--hard', 'origin/gh-pages'
  end

  puts "* Compiling"
  system 'yarn', 'build'

  puts "* Copying to deploy branch"
  system 'rsync', '-rv', '--exclude=".git"', '--force', 'dist/', 'deploy/'

  Dir.chdir('deploy') do
    puts "* Committing deploy"
    system 'git', 'add', '-A'
    system 'git', 'commit', '-m', "Deploy by #{Etc.getlogin}"
    puts "* Pushing deploy"
    system 'git', 'push'
  end
ensure
  puts "* Resetting deploy files"
  move(live_files, DEPLOY_NAME)
  move(internal_files, LIVE_NAME)
end
