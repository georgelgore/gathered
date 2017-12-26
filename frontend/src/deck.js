class Deck{
  constructor(name, id){
    this.name = name
    this.id = id
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

    let div = document.createElement("div");
    let br = document.createElement("br");
    let input = document.createElement('input')
    // input.value = "Search Here"
    input.id = `input`
    input.placeholder = 'search cards by name'
    input.type = "text"
    input.dataset.id = this.id
    let h5 = document.createElement("h5");
    let deck = document.createTextNode(`${this.name}`)
    div.id = `deck-${this.id}`
    div.dataset.id = this.id
    let cardHolder = document.createElement("div");
    cardHolder.id = "holder"

    h5.appendChild(deck)
    div.appendChild(h5)
    div.appendChild(br)
    div.appendChild(input)
    div.appendChild(br)
    div.appendChild(cardHolder)
    document.getElementById('deck-body').appendChild(div)
  }
}

Deck.all = []
