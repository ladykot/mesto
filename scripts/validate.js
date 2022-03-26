const obj = {
    formElement: '.popup__form',
    inputElement: '.popup__inputs-item',
    // inputSet: '.popup__inputs',
    buttonElement: '.popup__button-save',
    errorClass: 'popup__inputs-error_active',
    buttonDisableClass: 'popup__button-save_disable',
}

function getErrorElement(inputElement) {
    return formElement.querySelector(`.${inputElement.id}-error`);
}

function showInputError(formElement, inputElement, errorMessage) {
    errorElement = getErrorElement(inputElement);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__inputs-error_active')
    inputElement.classList.add('popup__inputs-item_invalid');
}

function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove('popup__inputs-error_active');
    inputElement.classList.remove('popup__inputs-item_invalid');
}

// проверка поля на валидность
function checkInputValidity(formElement, inputElement) {
    console.log(inputElement.validity)
    if(!inputElement.validity.valid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}

// * наложение обработчиков на поля формы
function setEventListeners(formElement, inputElement) {
    const inputList = Array.from(formElement.querySelectorAll(inputElement))
    inputList.forEach(inputItem => {
        inputItem.addEventListener('input', evt => {
            checkInputValidity(formElement, inputItem)
        })
    })
}


function enableValidation({formElement, inputElement, buttonElement, errorElement, errorClass, buttonDisableClass}) {
    // * запуск процесса валидации
    const formList = Array.from(document.querySelectorAll(formElement));
    const formListIterator = (formList) => {
        formList.forEach(form => {
            const handelFormSubmit = (evt) => {
                evt.preventDefault();
            };
            form.addEventListener('submit', handelFormSubmit);
            setEventListeners(form, inputElement)
        });
    };
    formListIterator(formList);
};

enableValidation(obj);

