class Deck{
  constructor(name, id){
    this.name = name
    this.id = id
    this.cards = []
    Deck.all.push(this)
  }

  render(){
    let div = document.createElement("div");
    div.className += "jumbotron"
    let deck = document.createTextNode(`${this.name}`)
    div.className = "deck"
    div.id = `deck-${this.id}`
    div.dataset.id = this.id
    div.appendChild(deck)

    document.getElementById('deck-holder').appendChild(div)
  }

  renderDeck(){
    document.getElementById('deck-body').innerHTML = ""
    document.getElementById('deck-right').innerHTML = ""
    let rightSide = document.getElementById('deck-right')
    rightSide.style = "jumbotron"
    let div1 = document.createElement("div");
    div1.className += "jumbotron"
    div1.id = "second-form"
    let div2 = document.createElement("div");
    div2.className += "jumbotron"
    div2.id = "second-form"
    let div3 = document.createElement("div");
    div3.className += "jumbotron"
    div3.id = "card-holder"
    div3.style = `background-color: rgba(238,238,238,0.0);`
    let br = document.createElement("br");
    let form = document.createElement("form")
    let form2 = document.createElement("form")
    let input1 = document.createElement('input')
    let h3 = document.createElement("h3");
    let button2 = document.createElement("button");
    let button2text = document.createTextNode("search me!");
    let button = document.createElement("button");
    let buttonText = document.createTextNode("weeeee!");
    let colors = document.createElement("select");
    let types = document.createElement("select");


    let option1 = document.createElement('option')
    option1.value = "White";
    option1.text = "White";
    colors.appendChild(option1)

    let option2 = document.createElement('option')
    option2.value = "Blue";
    option2.text = "Blue";
    colors.appendChild(option2)

    let option3 = document.createElement('option')
    option3.value = "Red";
    option3.text = "Red";
    colors.appendChild(option3)

    let option4 = document.createElement('option')
    option4.value = "Black";
    option4.text = "Black";
    colors.appendChild(option4)

    let option5 = document.createElement('option')
    option5.value = "Blue";
    option5.text = "Blue";
    colors.appendChild(option5)


    let types1 = document.createElement('option')
    types1.value = "Artifact";
    types1.text = "Artifact";
    types.appendChild(types1)

    let types2 = document.createElement('option')
    types2.value = "Creature";
    types2.text = "Creature";
    types.appendChild(types2)


    let types3 = document.createElement('option')
    types3.value = "Enchantment";
    types3.text = "Enchantment";
    types.appendChild(types3)

    let types4 = document.createElement('option')
    types4.value = "Instant";
    types4.text = "Instant";
    types.appendChild(types4)

    let types5 = document.createElement('option')
    types5.value = "Land";
    types5.text = "Land";
    types.appendChild(types5)

    let types6 = document.createElement('option')
    types6.value = "Sorcery";
    types6.text = "Sorcery";
    types.appendChild(types6)

    colors.id = "mana-searcher"
    types.id = "types-searcher"
    button.id = "name-searcher"
    button2.id = "other-searcher"

    // let input2 = document.createElement('input');
    // input2.id = `type`
    // input2.style = "text-transform: capitalize;"
    // input2.placeholder = 'search cards by type'
    // input2.type = "text"
    // input2.dataset.id = this.id

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


    form.id = "search-by-name"
    form2.id = "search-by-more"

    button.appendChild(buttonText)
    button2.appendChild(button2text)
    h3.innerText = "Go Fish!"
    // input1.value = "Search Here"
    input1.id = `input1`
    input1.style = "text-transform: capitalize;"
    input1.placeholder = 'search cards by name'
    input1.type = "text"
    input1.dataset.id = this.id

    let h5 = document.createElement("h5");
    let container = document.createElement("div");
    container.className = 'container'
    container.innerHTML = `
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" id="image-holder">
        </div>
        <!-- Left and right controls -->

      </div>
    `
    h5.dataset.id = `${this.id}`
    h5.id = "deck-name"
    let deck = document.createTextNode(`${this.name}`)
    let div = document.createElement("div");
    div.className += "jumbotron"
    div.id = `deck-${this.id}`
    div.style = `background-color: rgba(238,238,238,0.0);`
    div.dataset.id = this.id
    let cardHolder = document.createElement("div");
    cardHolder.id = "holder"

    h5.appendChild(deck)
    div.appendChild(h5)
    div.appendChild(container)
    div.appendChild(br)

    form.appendChild(h3)
    form.appendChild(input1)
    form.appendChild(button)

    form.appendChild(br)
    form.appendChild(br)
    // form.appendChild(input2)
    form2.appendChild(types)
    form2.appendChild(br)
    form2.appendChild(colors)
    form2.appendChild(power)
    form2.appendChild(toughness)
    form2.appendChild(button2)
    form2.appendChild(br)
    div2.innerHTML = `<h3>Filter Cards:</h3>`
    div2.appendChild(form2)
    div1.appendChild(form)
    rightSide.appendChild(div1)
    rightSide.appendChild(div2)
    rightSide.appendChild(div3)
    div.appendChild(br)
    div.appendChild(cardHolder)

    document.getElementById('deck-body').appendChild(div)
  }
}

Deck.all = []
