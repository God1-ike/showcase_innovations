# frozen_string_literal: true

class Startup < ApplicationRecord
  include AASM
  include StartupRepository

  has_one_attached :presentation
  has_many :pilots
  has_many :comment, dependent: :nullify

  has_many :startup_tags, dependent: :destroy
  has_many :tags, through: :startup_tags

  aasm :state, column: :state do
    state :new, initial: true
    state :screening, :scoring, :expert_council, :acceleration_program,
          :piloting_program, :investing

    event :set_screening do
      transitions to: :screening
    end

    event :set_scoring do
      transitions to: :scoring
    end

    event :set_expert_council do
      transitions to: :expert_council
    end

    event :set_acceleration_program do
      transitions to: :acceleration_program
    end

    event :set_piloting_program do
      transitions to: :piloting_program
    end

    event :set_investing do
      transitions to: :investing
    end
  end
end
