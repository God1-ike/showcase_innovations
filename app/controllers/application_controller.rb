class ApplicationController < ActionController::Base
  skip_forgery_protection

  def user_full_name
    YAML.load_file(Rails.root.join("test/fixtures/full_names.yml")).sample
  end
end
