class WelcomeController < ApplicationController
  def index
    render file: Rails.root.join('frontend', 'build', 'index.html'), layout: false
  end
end
