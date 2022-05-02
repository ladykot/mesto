import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor({ link, name }, popupSelector) {
        super(popupSelector);
        this._link = link;
        this._name = name;
    }

    open() { // открывает одну карточку
        this._popupElement.querySelector('.popup__title-big-image').textContent = this._name;
        const image = this._popupElement.querySelector('.popup__big-foto');
        image.src = this._link;
        image.alt = this._name;
        super.open(); // добавляем модификатор '.popup_opend'
    }

    
}