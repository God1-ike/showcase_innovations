class AddTagTypeToTags < ActiveRecord::Migration[6.1]
  def change
    add_column :tags, :tag_type, :string
  end
end
