export default class Card {
    constructor({data, handleCardClick, handleDeleteClick, handelLikeClick}, templateSelector) {// templateSelector = '#template-card'
        this._templateSelector = templateSelector;
        this._templateCard = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.cards__item');
        this._data = data;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handelLikeClick = handelLikeClick;
        this._likes = data.likes;
        this._id = data.id; // id карточки
        this._userId = data.userId; // id пользователя из профиля
        this._ownerId = data.ownerId // id того, кто добавил карточку
    };

    _likeHandler = () => {
        this._likeButton.classList.toggle('cards__union_active');
    };

    deleteCard = () => {
        this._cardItem.remove();
        this._cardItem = null;
    };

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._handelLikeClick(this._id));
        this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
        this._increaseFoto.addEventListener('click', () => this._handleCardClick(this._data));
    };

    isliked = () => {
        this._likes.some(like => { // если есть мой лайк в массиве лайков
            return like._id = this._userId
        })
    }

    setLikes(newLikes) { // метод ставит количество лайков
        this._likes = newLikes //  обновляем количество лайков после клика на сердечко
        const likeCount = this._cardItem.querySelector('.cards__button-counter')
        likeCount.textContent = this._likes.length;
        if (this.isliked()) {
            this._likeHandler()
        }
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
        this.setLikes(this._likes);


        if (this._userId !== this._ownerId) { // сравниваем id пользователей карточек
            this._deleteButton.style.display = 'none' // убираем иконку Удаления на чужих карточках
        }



        return this._cardItem; // возвращаем разметку карточки
    };
};

