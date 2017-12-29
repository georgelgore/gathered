class Deck{
  constructor(name, id){
    this.name = name
    this.id = id
    this.cards = []
    Deck.all.push(this)
  }

  render(){
    let div = document.createElement("div");
    let deck = document.createTextNode(`${this.name}`)
    div.className = "deck"
    div.id = `deck-${this.id}`
    div.dataset.id = this.id
    div.appendChild(deck)

    document.getElementById('deck-holder').appendChild(div)
  }

  renderDeck(){
    document.getElementById('deck-body').innerHTML = ""

    let rightSide = document.getElementById('deck-right')
    let div = document.createElement("div");
    let br = document.createElement("br");
    let input = document.createElement('input')
    let h3 = document.createElement("h3");
    h3.innerText = "Go Fish!"
    // input.value = "Search Here"
    input.id = `input`
    input.placeholder = 'search cards by name'
    input.type = "text"
    input.dataset.id = this.id
    let h5 = document.createElement("h5");
    let cardDisplay = document.createElement("ul");
    cardDisplay.id = "card-display"
    h5.dataset.id = `${this.id}`
    h5.id = "deck-name"
    let deck = document.createTextNode(`${this.name}`)
    div.id = `deck-${this.id}`
    div.dataset.id = this.id
    let cardHolder = document.createElement("div");
    cardHolder.id = "holder"

    h5.appendChild(deck)
    div.appendChild(h5)
    div.appendChild(cardDisplay)
    div.appendChild(br)
    rightSide.appendChild(h3)
    rightSide.appendChild(input)
    div.appendChild(br)
    div.appendChild(cardHolder)
    document.getElementById('deck-body').appendChild(div)
  }
}

Deck.all = []
