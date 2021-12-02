class Startup < ApplicationRecord
  extend Enumerize
  validates :title, :description, :phone_number, :state, presence: true

  enumerize :direction, in: %i[]
end
