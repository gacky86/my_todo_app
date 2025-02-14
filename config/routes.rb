Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tasks, only: %i[index show create update destroy] do
        collection do
          delete 'destroy_all'
        end
      end
    end
  end
end
