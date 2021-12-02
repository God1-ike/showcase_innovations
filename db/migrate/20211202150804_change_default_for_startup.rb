class ChangeDefaultForStartup < ActiveRecord::Migration[6.1]
  def change
    change_column_null :startups, :title, from: true, to: false
    change_column_null :startups, :description, from: true, to: false
    change_column_null :startups, :state, from: true, to: false
    change_column_null :startups, :phone_number, from: true, to: false
  end
end
