class PilotSerializer < ActiveModel::Serializer
  attributes :name, :project_team, :initiation_date, :state, :testing_phase, :subordinate_org

  belongs_to :startup
end