Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
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
      resources :catagories
    end

  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
