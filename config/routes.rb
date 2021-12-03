Rails.application.routes.draw do
  root to: 'welcome#index'

  namespace :api do
    resources :startups, only: %i[create update destroy index show] do
      patch :change_state, on: :member
    end
    resources :pilots, only: %i[create update destroy index show]

    resource :stats, only: [] do
      get :by_state
      get :by_tech_tags
      get :by_sphere_tags
      get :by_organization
      get :by_segment
      get :by_people_count
    end

    resources :tags, only: %i[index]
    resources :pilot_comments, only: %i[index create]
    resources :startup_comments, only: %i[index create]
  end

  match '/:path', to: 'welcome#index', via: :all, constraints: { path: /((?!rails).)*/ }
end
