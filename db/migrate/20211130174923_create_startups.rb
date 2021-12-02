class CreateStartups < ActiveRecord::Migration[6.1]
  def change
    create_table :startups do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :state, null: false
      t.string :contact_name
      t.string :phone_number, null: false
      t.string :email
      t.string :direction
      t.timestamps
    end
  end
end
