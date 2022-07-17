import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor({popupSelector, handelSubmitForm}) {
        super(popupSelector);
        this._handelSubmitForm = handelSubmitForm;
        this._formElement = document.querySelector(this._popupSelector);
        this._form = this._formElement.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll(".popup__inputs-item");
        this._getInputValues = this._getInputValues.bind(this)
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => {
          this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('подтвердить')
            // debugger
            this._handelSubmitForm(this._getInputValues());
        });
    }

    close() {
        this._form.reset();
        super.close();
    }
}