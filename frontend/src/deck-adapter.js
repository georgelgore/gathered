class DeckAdapter{

  static getDecks(){
    return fetch('http://localhost:3000/api/v1/decks/').then(resp => resp.json())
  }

  static createDeck(deck){
    return fetch('http://localhost:3000/api/v1/decks/', {
      method: "POST",
      headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({name: deck})
    }).then(resp => resp.json())
  }

  static deleteDeck(id){
    return fetch(`http://localhost:3000/api/v1/decks/${id}`, {method :'delete'})
  }



  }
