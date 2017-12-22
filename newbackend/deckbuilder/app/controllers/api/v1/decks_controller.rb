class Api::V1::DecksController < ApplicationController

  def index
    @decks = Deck.all
    render json: @decks
  end

  def show
    @deck = Deck.find(params[:id])
    render json: @deck
  end

  def create
    @deck = Deck.new(deck_params)
    render json: @deck
  end


  private

  def deck_params
    params.require(:card).permit(:name)
  end
end
