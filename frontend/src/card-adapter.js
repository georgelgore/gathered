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


  static getCardsBySearch(type,power,toughness,color){
    let site = `http://localhost:3000/api/v1/cards?`
    if (!!type){
      site += `types=${type}`
    }
    if (!!power){
      site += `&power=${power}`
    }
    if (!!toughness){
      site += `&toughness=${toughness}`
    }
      site += `&color=${color}`
      return fetch(`${site}`, {
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
