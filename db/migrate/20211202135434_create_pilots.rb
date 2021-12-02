class CreatePilots < ActiveRecord::Migration[6.1]
  def change
    create_table :pilots do |t|
      t.belongs_to :startup
      t.string :name
      t.string :project_team
      t.date :initiation_date
      t.string :state
      t.string :testing_phase
      t.string :subordinate_org

      t.timestamps
    end
  end
end
