class StartupSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :state, :contact_name, :phone_number, :email, :direction, :legal_entity_title,
             :contact_rank, :inn, :people_count, :site_url, :presentation, :telegram_url, :presentation_url

  has_many :pilots

  def presentation
    return if object.presentation.blank?

    Rails.application.routes.url_helpers.rails_storage_proxy_path(object.presentation, only_path: true)
  end
end