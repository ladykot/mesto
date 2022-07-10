import Popup from "./Popup.js";
export default class PopupWithSubmit extends Popup {
    constructor({popupSelector, handelSubmitDeleteForm}) {
        super(popupSelector);
        this._handelSubmitDeleteForm = handelSubmitDeleteForm;
        this._formElement = document.querySelector(this._popupSelector);
        this._deleteButton = this._formElement.querySelector('.popup__button-save')
    }

    setEventListeners() {
        super.setEventListeners()
        this._formElement.addEventListener('submit', (event) => { // слушатель на кнопку Да
            console.log('клик')
            this._handelSubmitDeleteForm(); // функция удаляет карточку на сервере
        });
    }
}