require 'fileutils'

paths = %w[base en].map { |p| File.join('src', 'i18n', 'strings', p) }

LIVE_NAME = 'private.ts'
DEPLOY_NAME = 'private.deploy.ts'
INTERNAL_NAME = 'private.internal.ts'

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

  system 'yarn', 'build'

  system 'rsync', '-rvz', '--delete', '--force', 'dist/',
         'deploy@www.timothymorgan.info:/var/www/www.timothymorgan.info/'

ensure
  move(live_files, DEPLOY_NAME)
  move(internal_files, LIVE_NAME)
end
