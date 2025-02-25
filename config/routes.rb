Rails.application.routes.draw do
  get 'home/index'


  namespace :api do
    namespace :v1 do
      resources :tasks

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        #authディレクトリにあるregistrationsコントローラーに設定
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end

    end
  end
end
