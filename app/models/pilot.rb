class Pilot < ApplicationRecord
  include AASM

  belongs_to :startup
  has_many :comment, dependent: :nullify
  has_many :pilot_tags, dependent: :destroy
  has_many :tags, through: :pilot_tags

  aasm :state, column: :state do
    state :in_work, initial: true
    state :suspended, :finished, :closed, :cancelled

    event :set_suspended do
      transitions to: :suspended
    end

    event :set_finished do
      transitions to: :finished
    end

    event :set_closed do
      transitions to: :closed
    end

    event :set_canceled do
      transitions to: :cancelled
    end
  end


  # Список фаз тестирования:
  # 1. positioning_otkm => Позиционирование в ОТКМ (организации транспортного комплекса Москвы)
  # 2. detailed_parameters => Детализация параметров пилотного тестирования
  # 3. preparation_for_testing => Подготовка к пилотному тестированию
  # 4. pilot_testing => Проведение пилотного тестирования
  # 5. report_generation => Формирование отчёта пилотном тестировании
  # 6. closing_pilot_project => Закрытие пилотного проекта
  # 7. set_testing_closed => Закрыт

  aasm :testing_phase, column: :testing_phase do
    state :positioning_otkm, initial: true
    state :detailed_parameters, :preparation_for_testing, :pilot_testing, :report_generation,
          :closing_pilot_project, :closed

    event :set_detailed_parameters do
      transitions to: :detailed_parameters
    end

    event :set_preparation_for_testing do
      transitions to: :preparation_for_testing
    end

    event :set_pilot_testing do
      transitions to: :pilot_testing
    end

    event :set_report_generation do
      transitions to: :report_generation
    end

    event :set_closing_pilot_project do
      transitions to: :closing_pilot_project
    end

    event :set_testing_closed do
      transitions to: :closed
    end
  end
end
