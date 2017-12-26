class Api::V1::DeckcardsController < ApplicationController

  def index
    @deckcards = DeckCard.all

    render json: @deckcards
  end
end
