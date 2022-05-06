export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(this._popupSelector); // нашли попап по селектору
        this.close = this.close.bind(this)
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleClickOverlay = this._handleClickOverlay.bind(this);
        this._buttonClose = this._popupElement.querySelector('.popup__button-close') // нашли кнопку закрытия попапа
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        window.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === "Escape") {
            this.close();
        }
    }

    _handleClickOverlay(event) {
        if(event.target !== event.currentTarget) {
          return;
        }
        this.close();
    }

    setEventListeners () {
        this._buttonClose.addEventListener('click', () => this.close()); // слушатель на кнопку закрытия попапа
        this._popupElement.addEventListener('click', (event) => {this._handleClickOverlay(event)});
        const popupContainer = this._popupElement.querySelector('.popup__container');
        popupContainer.addEventListener('click', (event) => {this._handleClickOverlay(event)});
    }
}


