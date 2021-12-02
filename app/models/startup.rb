class Startup < ApplicationRecord
  extend Enumerize
  validates :title, :description, :phone_number, :state, presence: true

  has_one_attached :presentation

  enumerize :direction, in: %i[]
end
