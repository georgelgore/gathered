class CardAdapter{

  static getCards(){
    return fetch('http://localhost:3000/api/v1/cards').then(resp => resp.json());
  }

}
