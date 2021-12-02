class Tag < ApplicationRecord
  has_many :pilot_tags, dependent: :destroy
  has_many :pilots, through: :pilot_tags

  has_many :startup_tags, dependent: :destroy
  has_many :startups, through: :startup_tags
end
