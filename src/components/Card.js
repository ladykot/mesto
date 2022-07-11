export default class Card {
    constructor({data, handleCardClick, handleDeleteClick}, templateSelector) {// templateSelector = '#template-card'
        this._templateSelector = templateSelector;
        this._templateCard = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.cards__item');
        this._data = data;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._likes = data.likes;
        this._id = data.id;
    };

    _likeHandler = () => {
        this._likeButton.classList.toggle('cards__union_active');
    };

    deleteCard = () => {
        this._cardItem.remove();
        this._cardItem = null;
    };

    _setEventListeners() {
        this._likeButton.addEventListener('click', this._likeHandler);
        this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
        this._increaseFoto.addEventListener('click', () => this._handleCardClick(this._data));
    };

    _setLikes() {
        const likeCount = this._cardItem.querySelector('.cards__button-counter')
        likeCount.textContent = this._likes.length;
    }

    getCard() {
        // клонируем шаблон из разметки
        this._cardItem = this._templateCard.cloneNode(true);
        // находим и меняем содержмое карточки
        this._increaseFoto = this._cardItem.querySelector('.cards__item-pic');
        this._cardItem.querySelector('.cards__title').textContent = this._data.name;
        this._increaseFoto.src = this._data.link;
        this._increaseFoto.alt = this._data.name;
        this._likeButton = this._cardItem.querySelector('.cards__union');
        this._deleteButton = this._cardItem.querySelector('.cards__item-delete');
        this._setEventListeners();
        this._setLikes();
        
        // возвращаем разметку карточки
        return this._cardItem;
    };
};

