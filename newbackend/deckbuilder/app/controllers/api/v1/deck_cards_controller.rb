class Api::V1::DeckCardsController < ApplicationController

  def index
    @deckcards = DeckCard.all
    render json: @deckcards
  end

  def show
    @deckcard = DeckCard.find(params[:id])
    render json: @deckcard
  end

  def create
    @deckcard = DeckCard.create(deckcardparams)
    render json: @deckcard
  end


  def destroy
    @deckcard = DeckCard.find(params[:id])
    @deckcard.destroy
  end

  private

  def deckcardparams
    params.require(:deck_card).permit(:deck_id, :card_id)
  end

end
