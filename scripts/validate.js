const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__inputs-item',
    buttonSelector: '.popup__button-save',
    errorClass: 'popup__inputs-error_active',
    buttonDisableClass: 'popup__button-save_disable',
}

const getErrorElement = (formElement, inputElement) => {
    return formElement.querySelector(`.${inputElement.id}-error`);
}

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = getErrorElement(formElement, inputElement);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__inputs-error_active');
    inputElement.classList.add('popup__inputs-item_invalid');
}

const hideInputError = (formElement, inputElement) => {
    errorElement = getErrorElement(formElement, inputElement);
    errorElement.textContent = '';
    errorElement.classList.remove('popup__inputs-error_active');
    inputElement.classList.remove('popup__inputs-item_invalid');
}

// проверка поля на валидность
const checkInputValidity = (formElement, inputElement) => {
    if(!inputElement.validity.valid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}

const getButtonElement = (formElement) => {
    return formElement.querySelector('.popup__button-save');
}

// * наложение обработчиков на поля формы
const setEventListeners = (formElement, inputSelector) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = getButtonElement(formElement);
    toggleButtonState(inputList, buttonElement)
    
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', evt => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        })
        
    })
}


const enableValidation = ({formSelector, inputSelector, ...rest}) => {
    // * запуск процесса валидации
    const formList = Array.from(document.querySelectorAll(formSelector));
    const formListIterator = (formList) => {
        formList.forEach(formElement => {
            setEventListeners(formElement, inputSelector);
        });
    };
    formListIterator(formList);
};


const toggleButtonState = (inputList, buttonElement) => {
    const inputElements = Array.from(inputList);
    const hasInvalidInput = inputElements.some((inputElement) => {
        return !inputElement.validity.valid;
    });
    if(hasInvalidInput) {
        buttonElement.classList.add('popup__button-save_disable');
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove('popup__button-save_disable');
        buttonElement.removeAttribute('disabled');
    }
}


// enableValidation(obj);
