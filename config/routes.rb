Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root";
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :tracks, only: [:index]
    resources :home, only: [:index]
    resources :playlists, only: [:index, :show, :create, :update, :destroy]
    resources :playlist_items, only: [:create, :destroy]
  end

end
