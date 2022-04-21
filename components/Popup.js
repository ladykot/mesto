export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose());
        }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose());
    }

    _handleEscClose = () => {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
    // слушатель клика иконке закрытия попапа. 
    // Модальное окно также закрывается при клике на затемнённую область вокруг формы.
    }
}