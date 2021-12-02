class AddMoreFieldsToStartups < ActiveRecord::Migration[6.1]
  def change
    add_column :startups, :certification_requireness, :string
    add_column :startups, :usage, :string
    add_column :startups, :request_for_accelerator, :string
    add_column :startups, :knowledge_source, :string
    add_column :startups, :technologies_used, :string
    add_column :startups, :usage_area, :string
  end
end
