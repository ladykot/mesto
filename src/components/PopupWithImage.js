import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popupElement.querySelector('.popup__big-foto');
    }

    open(item) { // открывает одну карточку
        // debugger
        this._link = item.link;
        this._name = item.name;
        this._popupElement.querySelector('.popup__title-big-image').textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;
        super.open(); // добавляем модификатор '.popup_opend'
    }

}