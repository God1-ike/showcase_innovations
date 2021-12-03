# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
require 'json'

tags = JSON.parse(File.read(Rails.root.join("test/fixtures/tags.json")))

tags.each do |tags_info|
  tag = Tag.find_or_initialize_by(name: tags_info["name"])
  tag.assign_attributes(tags_info)
  tag.save!
end

startups = JSON.parse(File.read(Rails.root.join("test/fixtures/startups.json")))

startups.each do |startup_info|
  tag_list = startup_info.delete("tags")
  tags = Tag.where(name: tag_list)
  startup = Startup.find_or_initialize_by(email: startup_info["email"])
  startup.assign_attributes(startup_info)
  startup.tags = tags
  startup.save!
end

pilots = JSON.parse(File.read(Rails.root.join("test/fixtures/pilots.json")))

pilots.each do |pilot_info|
  tag_list = pilot_info.delete("tags")
  tags = Tag.where(name: tag_list)
  startup = Startup.find_by(email: pilot_info.delete("startup_email"))
  pilot_info.merge!(startup: startup)

  pilot = Pilot.find_or_initialize_by(name: pilot_info["name"])
  pilot.assign_attributes(pilot_info)
  pilot.tags = tags
  pilot.save!
end