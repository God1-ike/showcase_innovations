class AddColumnsToStartup < ActiveRecord::Migration[6.1]
  def change
    change_table :startups, bulk: true do |t|
      t.string :legal_entity_title
      t.string :contact_rank
      t.string :inn
      t.integer :people_count
      t.string :site_url
    end
  end
end
