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
    // document.getElementById('deck-1').innerHTML = ""
    let a = document.createElement('a')
    let br = document.createElement('br')
    let button = document.createElement("button");
    button.type = "submit"
    button.name = "button"
    button.innerHTML = "Add card to deck"
    button.className = `add-to-deck`
    button.dataset.id = this.id
    button.id = `button-${this.id}`
    a.dataset.id = this.id
    let img = document.createElement('img')
    img.src = this.imageUrl
    img.align = "middle"
    img.width = 200
    img.height = 250
    let h5 = document.createElement('h5')
    let h6 = document.createElement('h6')
    let name = document.createTextNode(`${this.name}`)
    let color1 = document.createTextNode(`${this.color1}`)

    h5.appendChild(name)
    h6.appendChild(color1)
    a.appendChild(h5)
    a.appendChild(h6)
    a.appendChild(br)
    a.appendChild(br)
    a.appendChild(img)
    a.appendChild(br)
    a.appendChild(button)

    document.getElementById('deck-right').appendChild(a)
    }
  }

  renderCardFromDeck(){
    let parent = document.getElementById("card-display")

    let li = document.createElement('li')
    li.id = `list-${this.cardId}`

    let img = document.createElement('img')
    img.src = this.imageUrl
    img.align = "middle"
    img.width = 200
    img.height = 250

    li.appendChild(img)
    parent.appendChild(li)
  }
}


Card.all = []
