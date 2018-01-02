class DeckCard{

  constructor(deckId, cardId, id){
    this.deckId = deckId
    this.cardId = cardId
    this['id'] = id
    DeckCard.all.push(this)
  }


  renderDeckCardFromDeck(){
    let div = document.createElement('div')
    div.id = `list-${this.id}`
    div.class = "item"
    div.style="padding-right: 100px;"
    let button = document.createElement('button')
    button.innerText = "X"
    button.id = `button-${this.id}`
    button.dataset.id = `${this.id}`

    let card = Card.all.filter((card) => card.id === this.cardId)[0]
    let img = document.createElement('img')
    img.src = card.imageUrl
    // img.align = "middle"
    img.width = 223
    img.height = 311
    div.appendChild(img)
    div.appendChild(button)
    document.getElementById("image-holder").appendChild(div)
  }

  renderDeckCardText(){
    let div = document.createElement('div')
    div.id = `name-${this.id}`
    div.class = "item"
    div.style="padding-right: 100px;"

    let card = Card.all.filter((card) => card.id === this.cardId)[0]

    let h3 = document.createElement("h3")
    h3.className = `nameDisplay`
    h3.dataset.id = `${this.cardId}`
    h3.innerText = card.name
    div.appendChild(h3)
    document.getElementById("image-holder").appendChild(div)
  }
}

DeckCard.all = []
