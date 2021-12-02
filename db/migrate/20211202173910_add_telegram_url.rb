class AddTelegramUrl < ActiveRecord::Migration[6.1]
  def change
    add_column :startups, :telegram_url, :string
    add_column :startups, :presentation_url, :string
    add_column :pilots, :telegram_url, :string
  end
end
