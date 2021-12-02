class CreatePilotTags < ActiveRecord::Migration[6.1]
  def change
    create_table :pilot_tags do |t|
      t.references :pilot, null: false, foreign_key: true
      t.references :tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
