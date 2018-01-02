class Card{
  constructor(cmc, color1, color2,imageUrl, manaCost, cardName, power, subtype1, subtype2, cardText, toughness, types, cardId){
    this.cmc = cmc
    this.color1 = color1
    this.color2 = color2
    this.imageUrl = imageUrl
    this.manaCost = manaCost
    this['name'] = cardName
    this.power = power
    this.subtype1 = subtype1
    this.subtype2 = subtype2
    this['text'] = cardText
    this.toughness = toughness
    this.types = types
    this['id'] = cardId
    Card.all.push(this);
  }

  static inputAll(cards){
    cards.forEach(card => {
      card.render()
    })
  }

  render(){
    if (this.imageUrl){
      if (document.getElementById('div-holder')){
        document.getElementById('div-holder').innerHTML = ""
      }
    // document.getElementById('deck-1').innerHTML = ""
    let div = document.createElement('div')
    let br = document.createElement('br')
    let button = document.createElement("button");
    button.type = "submit"
    button.name = "button"
    button.innerHTML = "Add card to deck"
    button.class = `add-to-deck`
    button.dataset.id = this.id
    button.id = `button-${this.id}`
    div.dataset.id = this.id
    let img = document.createElement('img')
    img.src = this.imageUrl
    img.align = "middle"
    img.width = 200
    img.height = 250
    let h5 = document.createElement('h5')
    let h6 = document.createElement('h6')
    let name = document.createTextNode(`${this.name}`)
    let color1 = document.createTextNode(`${this.color1}`)

    div.id = "div-holder"
    h5.appendChild(name)
    h6.appendChild(color1)
    div.appendChild(h5)
    div.appendChild(h6)
    div.appendChild(br)
    div.appendChild(br)
    div.appendChild(img)
    div.appendChild(br)
    div.appendChild(button)

    document.getElementById('card-holder').appendChild(div)
    }
  }

  renderCardFromDeck(){
    let div = document.createElement('div')
    div.style = "width: 50%;"
    div.id = `list-${this.id}`
    div.class = "item"
    let button = document.createElement('button')
    button.innerText = "X"
    button.id = `button-${this.id}`
    button.dataset.id = `${this.id}`

    let img = document.createElement('img')
    img.src = this.imageUrl
    // img.align = "middle"
    img.width = 223
    img.height = 311
    div.appendChild(img)
    div.appendChild(button)
    document.getElementById("image-holder").appendChild(div)
  }
}

Card.all = []
