class DeckCardAdapter{

  static postDeckCard(deckId, cardId){
    return fetch(`http://localhost:3000/api/v1/deck_cards/`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body:JSON.stringify({deck_id: deckId, card_id: cardId})
    }
  ).then(resp => resp.json())
  }

  static deleteDeckCard(id){
     return fetch(`http://localhost:3000/api/v1/deck_cards/${id}`, {method :'delete'})
 }

  static getDeckCards(){
    return fetch(`http://localhost:3000/api/v1/deck_cards/`).then(resp => resp.json())
  }
}
