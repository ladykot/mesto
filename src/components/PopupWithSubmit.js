import Popup from "./Popup.js";
export default class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        // this._handelSubmitDeleteForm = handelSubmitDeleteForm;
        this._formElement = document.querySelector(this._popupSelector);
        this._form = this._formElement.querySelector('.popup__form');
        // this._deleteButton = this._form.querySelector('.popup__button-save')

    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (event) => { // слушатель на кнопку Да
            event.preventDefault()
            this._handelSubmitDeleteForm(event); // функция удаляет карточку на сервере
        });
    }

    setSumbitHandler(newhandelSubmitDeleteForm) { // публичный метод для 
        this._handelSubmitDeleteForm = newhandelSubmitDeleteForm;
    }
}