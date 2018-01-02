CardAdapter.getCards().then(arr => {
  arr.forEach(obj => {
    let newCard = new Card(obj.cmc, obj.color1, obj.color2, obj.imageUrl, obj.manaCost, obj['name'], obj.power, obj.subtype1, obj.subtype2, obj['text'], obj.toughness, obj.types, obj['id'])
  })
})

DeckCardAdapter.getDeckCards().then(arr => {
  arr.forEach( obj => {
    let newDeckCard = new DeckCard(obj.deck_id, obj.card_id, obj['id']);
  })
})

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    document.getElementById("deck-button").addEventListener("click", (event) => {
      EventHandler.renderDeckArea();
      EventHandler.renderDecks();


    document.getElementById("navbar").addEventListener("click", (event) => {
      EventHandler.getCards(event);
    })
    document.getElementById("deck-holder").addEventListener("dblclick", (event) => {
      if (event.target.className === 'deck'){
        let deckId = parseInt(event.target.dataset.id)
        DeckAdapter.deleteDeck(`${deckId}`)
        document.getElementById(event.target.id).innerHTML = ""
        document.getElementById("deck-name").innerHTML = ""

      }
    })

    document.getElementById("deck-creator-button").addEventListener("click", (event) =>{
      event.preventDefault()
      let input = document.getElementById("deck-input").value
      DeckAdapter.createDeck(`${input}`).then(arr => {
        let newDeck = new Deck(arr.name, arr.id)
        newDeck.render()
      })
    })

  })



  });
