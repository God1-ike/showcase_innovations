namespace :frontend do
  task :setup do
    on release_roles :all do
      within "#{current_path}/frontend" do
        execute 'yarn', 'install', '-s', '--frozen-lockfile', '--non-interactive'
        execute 'yarn', 'build'
      end
      within current_path do
        execute 'cp', '-r', "#{current_path}/frontend/build/static", "#{current_path}/public"
      end
    end
  end
end
