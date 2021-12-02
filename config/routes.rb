Rails.application.routes.draw do
  root to: 'welcome#index'

  namespace :api do
    resources :startups, only: %i[create update destroy index show] do
      patch :change_state, on: :member
    end
    resources :pilots, only: %i[create update destroy index show]
  end

  match '/:path', to: 'welcome#index', via: :all, constraints: { path: /((?!rails).)*/ }
end
