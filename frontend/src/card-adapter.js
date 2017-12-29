class CardAdapter{

  static getCards(){
    return fetch('http://localhost:3000/api/v1/cards').then(resp => resp.json());
  }

  static getSearchCards(name, page){
      return fetch(`http://localhost:3000/api/v1/cards?name=${name}&page=${page}`, {
      method: "GET",
      headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
    }).then(resp => resp.json())
  }


  static getCardById(id){
      return fetch(`http://localhost:3000/api/v1/cards?id=${id}`, {
      method: "GET",
      headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
    }).then(resp => resp.json())
  }

}
