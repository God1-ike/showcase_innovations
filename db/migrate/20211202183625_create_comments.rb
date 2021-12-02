class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.references :source, polymorphic: true
      t.text :description
      t.string :author
      t.timestamps
    end
  end
end
