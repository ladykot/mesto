import {openPopup} from './utils.js';
import {popupBigImage, bigImage, popupBigImageTitle} from './constants.js';

export class Card {
    constructor(data, templateSelector) {// templateSelector = '#template-card'
        this._templateSelector = templateSelector;
        this._templateCard = document.querySelector(this._templateSelector).content.querySelector('.cards__item');
        this._data = data;
    };

    _likeHandler = () => {
        this._likeButton.classList.toggle('cards__union_active');
    };

    _deleteCardHandler = () => {
        this._cardItem.remove();
        this._cardItem = null;
    };

    _setEventListeners() {
        this._likeButton.addEventListener('click', this._likeHandler);
        this._deleteButton.addEventListener('click', this._deleteCardHandler);
        this._increaseFoto.addEventListener('click', this._increaseFotoHandler);
    };

    _increaseFotoHandler = () => {
        const itemTitle = this._cardItem.querySelector('.cards__title').textContent;
        const itemPicTemplate = this._cardItem.querySelector('.cards__item-pic');
        const itemPic = itemPicTemplate.src;
        const itemAlt = this._cardItem.querySelector('.cards__item-pic').alt;
        bigImage.src = itemPic;
        bigImage.alt = itemAlt;
        popupBigImageTitle.textContent = itemTitle;
        openPopup(popupBigImage);
    };

    getCard() {
        this._cardItem = this._templateCard.cloneNode(true);
        this._increaseFoto = this._cardItem.querySelector('.cards__item-pic');
        this._cardItem.querySelector('.cards__title').textContent = this._data.name;
        this._increaseFoto.src = this._data.link;
        this._increaseFoto.alt = this._data.name;
        this._likeButton = this._cardItem.querySelector('.cards__union');
        this._deleteButton = this._cardItem.querySelector('.cards__item-delete');
        

        this._setEventListeners();
    
        return this._cardItem;
    };
};

