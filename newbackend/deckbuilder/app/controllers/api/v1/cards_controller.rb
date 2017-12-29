class Api::V1::CardsController < ApplicationController
# search for subtype by name, search for fullname wit a search button.
  def index
    if params[:name]
      @cards = Card.order(:name).page(params[:page]).select{|card| card.name.include?(params[:name])}
        # @cards = Kaminari.paginate_array(Card.all.select{|card| card.name.include?(params[:name])})
      render json: @cards
      return
    elsif params[:id]
      @cards = Card.all.select{|card| card.id == params[:id].to_i}
      render json: @cards
      return
    end
    @cards = Card.order(:id).page params[:page]
    render json: @cards
  end

  def show
    @card = Card.find(params[:id])
    render json: @card
  end


end
