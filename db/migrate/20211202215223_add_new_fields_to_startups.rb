class AddNewFieldsToStartups < ActiveRecord::Migration[6.1]
  def change
    add_column :startups, :readiness, :string
  end
end
