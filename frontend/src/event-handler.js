class EventHandler {

  static getCards(event){
    if(event.target.className == "deck"){
      let deck = Deck.all.filter(deck => deck.id === parseInt(event.target.dataset.id))[0]
      deck.renderDeck()
      let cards = DeckCard.all.filter(x => x.deckId === deck.id)
      cards.forEach(deckcard => {
        let cardId = deckcard.cardId
        let cardreq = CardAdapter.getCardById(cardId).then(arr => {
          let thing = arr[0]
          let card = new Card(thing.cmc, thing.color1, thing.color2, thing.imageUrl, thing.manaCost, thing['name'], thing.power, thing.subtype1, thing.subtype2, thing['text'], thing.toughness, thing.types, thing['id'])
          card.renderCardFromDeck()
        })
      })

      document.getElementById(`search-by-name`).addEventListener('click', (event) => {
        if (event.target.id === "name-searcher"){
          event.preventDefault()
          let key = document.getElementById("input1").value
          let encodedKey = encodeURI(key)
          console.log(encodedKey)
          CardAdapter.getSearchCards(encodedKey, 1).then(arr => {
            arr.forEach(card => {
              let newCard = new Card(card.cmc, card.color1, card.color2, card.imageUrl, card.manaCost, card['name'], card.power, card.subtype1, card.subtype2, card['text'], card.toughness, card.types, card['id'])
              newCard.render()
            })
          })
        }
        document.getElementById("holder").innerHTML = ""
        })


        document.getElementById(`search-by-more`).addEventListener('click', (event) => {
          event.preventDefault()
          let type = document.getElementById('type').value
          let color = document.getElementById('mana-searcher').value
          let power = document.getElementById('power').value
          let toughness = document.getElementById('toughness').value

         CardAdapter.getCardsBySearch(type,power,toughness,color).then(arr => {
            arr.forEach(card => {
              let newCard = new Card(card.cmc, card.color1, card.color2, card.imageUrl, card.manaCost, card['name'], card.power, card.subtype1, card.subtype2, card['text'], card.toughness, card.types, card['id'])
              newCard.render()
            })
          })
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


  static renderDeckArea(){
    document.getElementById("sidenav-holder").innerHTML +=
`    <div class="sidenav" id="navbar">
                <div id="deck-holder"></div><br>

                <form  id="deck-creator" action="index.html" method="post">
                  <input type="text" id='deck-input'>
                  <button type="submit" name="button" id="deck-creator-button">New Deck</button>
                </form>

            </div>`
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
