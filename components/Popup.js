export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        this._popupSelector.classList.add('popup_opened');
        // document.addEventListener('keydown', closeByEscape);
        }

    close() {
        this._popupSelector.classList.remove('popup_opened');
        // document.removeEventListener('keydown', closeByEscape);
    }

    _handleEscClose() {
        if (evt.key === "Escape") {
            const popupActive = document.querySelector('.popup_opened');
            this.close(popupActive);
        }
    }

    setEventListeners() {
    // слушатель клика иконке закрытия попапа. 
    // Модальное окно также закрывается при клике на затемнённую область вокруг формы.
    }
}