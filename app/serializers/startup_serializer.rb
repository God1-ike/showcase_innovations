class StartupSerializer < ActiveModel::Serializer
  attributes :title, :description, :state, :contact_name, :phone_number, :email, :direction, :legal_entity_title,
             :contact_rank, :inn, :people_count, :site_url, :presentation

  def presentation
    rails_storage_proxy_path(object.presentation)
  end
end