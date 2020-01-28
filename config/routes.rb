Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :user do
      resources :projects
    end

    resources :project_senders, only: [:create]

    resources :projects do
      resources :integration
      resources :analytic
      resources :billing
      resources :account
      resources :app
      resources :user_content
      resources :date_location
      resources :social
      resources :security
      resources :categories
    end

  end

  get '*other', to: 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
