// function handleSearchInput(event) {
//   //event is the "input" event
//   const searchTerm = event.target.value.trim(); //grab whatever the user typed in and .trim() off any extra spaces
//
//   const filteredCards = Card.all.filter(card =>
//     card.name.includes(searchTerm)
//   ); //grab a filtered list of pokemon that match the user's search term
//
//   filteredCards.forEach(card => return card.render())
// }
class EventHandler {

  static getCards(event){
    if(event.target.className == "deck"){
      let deck = Deck.all.filter(deck => deck.id === parseInt(event.target.dataset.id))[0]
      deck.renderDeck()
      let cards = DeckCard.all.filter(x => x.deckId === deck.id)
      cards.forEach(deckcard => {
        let cardId = deckcard.cardId

        let card = Card.all.filter(card => card.id === cardId)[0]
        card.renderCardFromDeck()
      })

      document.getElementById(`input`).addEventListener('input', (event) => {
        let key = event.target.value
        console.log(key)
        let filteredCards = Card.all.filter(card => {
          if (card.name.toLowerCase().includes(key))
          {
            return card
          }
        })
        document.getElementById("holder").innerHTML = ""
        Card.renderAll(filteredCards)
        })

        document.getElementById('holder').addEventListener('click', (event) => {
          if (event.target.name === 'button'){
            let deckId =  parseInt(document.getElementById('deck-name').dataset.id)
            let cardId = parseInt(event.target.dataset.id)

            let deck = Deck.all.filter(deck => deck.id === deckId)[0]
            let card = Card.all.filter(card => card.id === cardId)[0]
            debugger
            card.renderCardFromDeck()
            DeckCardAdapter.postDeckCard(deckId, cardId)
          }
        })


    }
  }



  static renderDecks(){
    DeckAdapter.getDecks().then(arr => {
      arr.forEach(obj => {
        let newDeck = new Deck(obj.name, obj.id)
        newDeck.render()
      })
    })
  }
}
