class Api::V1::CardsController < ApplicationController

  def index
    @cards = Card.all
    # cards = MTG::Card.all
    #
    # @cards << Card.all[10001..20000]
    # @cards << Card.all[20001..31000]
    paginate json: @cards, per_page: 5000
  end
end
