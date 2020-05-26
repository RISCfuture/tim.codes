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
  move(live_files, INTERNAL_NAME)
  move(deploy_files, LIVE_NAME)

  Dir.chdir('deploy') do
    system 'git', 'fetch'
    system 'git', 'reset', '--hard', 'origin/gh-pages'
  end

  system 'yarn', 'build'

  system 'rsync', '-rv', '--exclude=".git"', '--force', 'dist/', 'deploy/'

  Dir.chdir('deploy') do
    system 'git', 'add', '-A'
    system 'git', 'commit', '-m', "Deploy by #{Etc.getlogin}"
    system 'git', 'push'
  end
ensure
  move(live_files, DEPLOY_NAME)
  move(internal_files, LIVE_NAME)
end
