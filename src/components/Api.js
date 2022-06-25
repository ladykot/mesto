export class Api {
    constructor({baseUrl, headers}) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    getProfileData() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status)) // иначе выбрасывается ошибка и ловится с помощью cath
        // .then(res => {
        //     console.log("наш результат", res)
        // })
        .catch(console.log())
    }
  
    getInitialCards() {
      // ...
    }
  
    // другие методы работы с API
  }
  
  export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44', // ссылка на бэкенд
    headers: {
      authorization: 'ca203a3f-def8-4b98-b8c0-30f8a6e88919',
      'Content-Type': 'application/json'
    }
  });