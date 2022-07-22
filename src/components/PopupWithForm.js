import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor({popupSelector, handelSubmitForm}) {
        super(popupSelector);
        this._handelSubmitForm = handelSubmitForm;
        this._formElement = document.querySelector(this._popupSelector);
        this._form = this._formElement.querySelector('.popup__form');
        this._buttonSave = this._form.querySelector('.popup__button-save')
        this._inputList = this._form.querySelectorAll(".popup__inputs-item");
        this._getInputValues = this.getInputValues.bind(this);
        this.close = this.close.bind(this)

        // this._activeState = activeState;
        // this._defaultState = defaultState;
        // this._toggleButtonState = this.toggleButtonState.bind(this);
        // this._configButtonState = configButtonState

    }

    getInputValues() {
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
            this._handelSubmitForm(this.getInputValues());
        });
    }

    close() {
        this._form.reset();
        super.close();
    }




    // toggleButtonState(isSaving) {
    //     if (isSaving) {
    //         this._buttonSave.textContent = this._configButtonState.activeState;
    //     } else {
    //         this._buttonSave.textContent = this._configButtonState.defaultState
    //     }
    // }
}