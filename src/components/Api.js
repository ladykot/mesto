const errorHandler = (res) => res.ok ? res.json() : Promise.reject("ошибочка вышла", res.status) // перенести в utils?

export class Api {
    constructor({baseUrl, headers}) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    getProfileData() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(errorHandler) // иначе выбрасывается ошибка и ловится с помощью cath
        .catch(console.log())
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(errorHandler)
        .catch(console.log())
    }

    editProfileData(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
            })
        })
        .then(errorHandler)
        .catch(console.log())
    }

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name,
                link
            })
        })
        .then(errorHandler)
        .catch(console.log())
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then(errorHandler)
        .catch(console.log())
    }
    // другие методы работы с API

    addLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers,
        })
        .then(errorHandler)
        .catch(console.log())
    }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then(errorHandler)
        .catch(console.log())
    }

    changeAvatar = (avatar) => {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar,
            })
        })
        .then(errorHandler)
        .catch(console.log())
    
    }

  }
  
;