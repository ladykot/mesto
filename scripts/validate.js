const obj = {
    formElement: '.popup__form',
    inputElement: '.popup__inputs-item',
    // inputSet: '.popup__inputs',
    buttonElement: '.popup__button-save',
    errorClass: 'popup__inputs-error_active',
    buttonDisableClass: 'popup__button-save_disable',
}

const getErrorElement = (formElement, inputElement) => {
    return formElement.querySelector(`.${inputElement.id}-error`);
}

const showInputError = (formElement, inputElement, errorMessage) => {
    errorElement = getErrorElement(formElement, inputElement);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__inputs-error_active')
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
    console.log(`порерка в форме ${formElement.name} поля ${inputElement.name}`)
    if(!inputElement.validity.valid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}


const toggleButtonState = (inputList, buttonElement) => {
    const hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        })
    }
    if(!hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button-save_disable');
        buttonElement.setAttribute('disabled', value='true');
    } else {
        buttonElement.classList.remove('popup__button-save_disable');
        buttonElement.removeAttribute('disabled');
    }
}


// * наложение обработчиков на поля формы
const setEventListeners = (formElement, inputElement) => {
    const buttonElement = formElement.querySelector('.popup__button-save');
    // console.log("кнопка",buttonElement)
    const inputList = Array.from(formElement.querySelectorAll(inputElement))
    // toggleButtonState(inputList, buttonElement)
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', evt => {
            console.log(evt.target)
            checkInputValidity(formElement, inputElement)
            toggleButtonState(inputList, buttonElement)
        })
    })
}


const enableValidation = ({formElement, inputElement, buttonElement, errorElement, errorClass, buttonDisableClass}) => {
    // * запуск процесса валидации
    const formList = Array.from(document.querySelectorAll(formElement));
    const formListIterator = (formList) => {
        formList.forEach(formElement => {
            const handelFormSubmit = (evt) => {
                evt.preventDefault();
            };
            formElement.addEventListener('submit', handelFormSubmit);
            setEventListeners(formElement, inputElement)
        });
    };
    formListIterator(formList);
};




enableValidation(obj);
