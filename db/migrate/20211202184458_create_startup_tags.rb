class CreateStartupTags < ActiveRecord::Migration[6.1]
  def change
    create_table :startup_tags do |t|
      t.references :startup, null: false, foreign_key: true
      t.references :tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
