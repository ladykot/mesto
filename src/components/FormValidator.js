export default class FormValidator {
    constructor(settings, form) {
        this._form = form;
        this._settings = settings;

    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._getErrorElement(inputElement);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);
        inputElement.classList.add(this._settings.inputInvalidSelector);
    }

    _getErrorElement = (inputElement) => {
        return this._form.querySelector(`.${inputElement.id}-error`);
    }

    _hideInputError(inputElement, errorElement) {
        errorElement = this._getErrorElement(inputElement);
        // debugger
        errorElement.textContent = '';
        errorElement.classList.remove(this._settings.errorClass);
        inputElement.classList.remove(this._settings.inputInvalidSelector);
    }

    // метод проверки поля на валидность
    _checkInputValidity = (inputElement) => {
    if(!inputElement.validity.valid) {
        const errorMessage = inputElement.validationMessage;
        this._showInputError(inputElement, errorMessage);
    } else {
        this._hideInputError(inputElement);
        }
    }

    // метод наложения обработчиков на поля формы
    _setEventListeners = () => {
        this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
        this._buttonElement = this._form.querySelector(this._settings.buttonSelector);
        this.toggleButtonState();
        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', evt => {
                this._checkInputValidity(inputElement);
                this.toggleButtonState();
            })
        })
    }

    disableSubmitButton = () => {
        // debugger
        this._buttonElement.classList.add(this._settings.buttonDisableClass);
        this._buttonElement.disabled = true;
    }

    enableSubmitButton = () => {
        this._buttonElement.classList.remove(this._settings.buttonDisableClass);
        this._buttonElement.disabled = false;
    }

    toggleButtonState = () => {
        const hasInvalidInput = this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
        if(hasInvalidInput) {
            this.disableSubmitButton();
        } else {
            this.enableSubmitButton();
        }
    }

    enableValidation() {
        // запуск процесса валидации для одной формы
        this._setEventListeners();
    };

    resetErrors = () => {
        this._inputList.forEach(inputElement => {
            this._hideInputError(inputElement);
        });
    };

}


