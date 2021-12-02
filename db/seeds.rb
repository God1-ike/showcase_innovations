# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

startups = YAML.load_file(Rails.root.join("config/startups.yml"))

startups.each do |startup_info|
  startup = Startup.find_or_initialize_by(email: startup_info[:email])
  startup.assign_attributes(startup_info)
  startup.save
end