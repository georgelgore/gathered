class Api::V1::CardsController < ApplicationController

  def index
    @cards = Card.all.limit(1000)
    # @cards << Card.all[10001..20000]
    # @cards << Card.all[20001..31000]
    render json: @cards
  end
end
