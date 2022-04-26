import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor({popupSelector, handelSubmitForm}) {
        super(popupSelector);
        this._handelSubmitForm = handelSubmitForm;
        this._formElement = document.querySelector(this._popupSelector);
        this._form = document.querySelector('.popup__form');
    }

    _getInputValues() {
        this._inputList = this._formElement.querySelectorAll(".popup__inputs-item");
        this._formValues = {};
        this._inputList.forEach((input) => {
          this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners () {  // обработчик сабмита формы
        super.setEventListeners();
        
        
        this._form.addEventListener('submit', (event) => {
            console.log('тутук')
            event.preventDefault();
            this._handelSubmitForm(this._getInputValues());
            }
        );
    }

    close() {
        this._form.reset();
        super.close();
    }
}