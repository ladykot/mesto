export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(this._popupSelector); // нашли попап по селектору
        this._handleEscClose = this._handleEscClose.bind(this); // привязали контекст
        this._buttonClose = this._popupElement.querySelector('.popup__button-close') // нашли кнопку закрытия попапа
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        // document.addEventListener('keydown', this._handleEscClose());
        }

    close() {
        this._popupElement.classList.remove('popup_opened');
        // document.removeEventListener('keydown', this._handleEscClose());
    }

    _handleEscClose = (evt) => {
        // evt.preventDefault();
        if (evt.which === "Escape") {
            this.close();
        }
    }

    setEventListeners = () => {
    // слушатель клика иконке закрытия попапа. 
    // Модальное окно также закрывается при клике на затемнённую область вокруг формы.
        this._buttonClose.addEventListener('click', this.close());
        
    }
}

