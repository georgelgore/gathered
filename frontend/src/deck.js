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
    document.getElementById('deck-right').innerHTML = ""
    let rightSide = document.getElementById('deck-right')


    let div = document.createElement("div");
    let br = document.createElement("br");
    let form = document.createElement("form")
    let input1 = document.createElement('input')
    let h3 = document.createElement("h3");
    let button = document.createElement("button");
    let buttonText = document.createTextNode("weeeee!");
    button.id = "name-searcher"

    let input2 = document.createElement('input');
    input2.id = `input2`
    input2.placeholder = 'search cards by type'
    input2.type = "text"
    input2.dataset.id = this.id

    let power = document.createElement('input');
    power.type = "text"
    power.maxlength = "1";
    power.id = `power`
    power.placeholder = "power"
    power.size = "5";
    power.dataset.id = this.id


    let toughness = document.createElement('input');
    toughness.type = "text"
    toughness.maxlength = "1";
    toughness.id = `toughness`
    toughness.placeholder = "toughness"
    toughness.size = "8";
    toughness.dataset.id = this.id


    form.id = "search-form"

    button.appendChild(buttonText)
    h3.innerText = "Go Fish!"
    // input1.value = "Search Here"
    input1.id = `input1`
    input1.placeholder = 'search cards by name'
    input1.type = "text"
    input1.dataset.id = this.id
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

    form.appendChild(h3)
    form.appendChild(input1)
    form.appendChild(button)
    form.appendChild(br)
    form.appendChild(input2)
    form.appendChild(power)
    form.appendChild(toughness)
    rightSide.appendChild(form)
    div.appendChild(br)
    div.appendChild(cardHolder)
    document.getElementById('deck-body').appendChild(div)
  }
}

Deck.all = []
