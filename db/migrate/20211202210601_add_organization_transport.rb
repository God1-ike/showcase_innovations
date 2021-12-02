class AddOrganizationTransport < ActiveRecord::Migration[6.1]
  def change
    add_column :startups, :organization_transport, :string
    add_column :startups, :business_segment, :string
  end
end
