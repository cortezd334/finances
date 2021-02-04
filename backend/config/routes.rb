Rails.application.routes.draw do
  resources :checkbooks
  resources :names
  resources :incomes
  resources :goals
  resources :bills
  resources :debts
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
