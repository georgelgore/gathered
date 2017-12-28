class DeckCard{

  constructor(deckId, cardId){
    this.deckId = deckId
    this.cardId = cardId
    DeckCard.all.push(this)
  }

}

DeckCard.all = []
