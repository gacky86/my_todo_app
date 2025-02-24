Rails.application.routes.draw do
  get 'home/index'
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    #authディレクトリにあるregistrationsコントローラーに設定
    registrations: 'auth/registrations'
  }

  root "home#index"

  namespace :api do
    namespace :v1 do
      resources :tasks
    end
  end
end
