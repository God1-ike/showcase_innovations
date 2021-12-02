class Startup < ApplicationRecord
  extend Enumerize

  has_one_attached :presentation

  enumerize :direction, in: %i[]
end
