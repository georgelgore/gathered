# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cards
    end
  end
end


run Rails.application
