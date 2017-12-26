CardAdapter.getCards().then(arr => {
  arr.forEach(obj => {
    let newCard = new Card(obj.cmc, obj.color1, obj.color2, obj.imageUrl, obj.manaCost, obj['name'], obj.power, obj.subtype1, obj.subtype2, obj['text'], obj.toughness, obj.types, obj['id'])
  })
})
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    EventHandler.renderDecks();


    // document.getElementById('holder').addEventListener((event) => {
    //   debugger
    // })

    document.getElementById("navbar").addEventListener("click", (event) => {
      EventHandler.getCards(event);
    })

    document.getElementById("deck-creator-button").addEventListener("click", (event) =>{
      event.preventDefault()
      document.getElementById("deck-input").value
      console.log(event)
    })
  });
