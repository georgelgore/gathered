document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    DeckAdapter.getDecks().then(arr => {
      arr.forEach(obj => {
        let newDeck = new Deck(obj.name, obj.id)
        newDeck.render()
      })
    })

    CardAdapter.getCards().then(arr => {
      arr.forEach(obj => {
        let newCard = new Card(obj.cmc, obj.color1, obj.color2, obj.imageUrl, obj.manaCost, obj['name'], obj.power, obj.subtype1, obj.subtype2, obj['text'], obj.toughness, obj.types, obj['id'])
      })
    })

    document.getElementById("navbar").addEventListener("click", (event) => {
      if(event.target.className == "deck"){
        let deck = Deck.all.filter(deck => deck.id === parseInt(event.target.dataset.id))
        deck[0].renderDeck()


        document.getElementById(`input`).addEventListener('input', (event) => {
          let key = event.target.value
          console.log(key)
          let filteredCards = Card.all.filter(card => {
            if (card.name.toLowerCase().includes(`${key}`))
            {
              return card
            }
          })
          document.getElementById("holder").innerHTML = ""
          Card.renderAll(filteredCards)
          // let cards =
        })
      }
    })

    document.getElementById("deck-creator-button").addEventListener("click", (event) =>{
      event.preventDefault()
      document.getElementById("deck-input").value
      console.log(event)
    })
  });
