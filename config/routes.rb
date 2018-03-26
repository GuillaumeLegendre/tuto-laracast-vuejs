Rails.application.routes.draw do
  resources :home, only: [:index] do
    collection do
      get 'advance-component'
      get 'ep9'
      get 'ep10'
      get 'ep11'
    end
  end
  root to: "home#index"
end
