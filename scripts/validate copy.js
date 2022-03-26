const obj = {
    formElement: '.popup__form',
    inputElement: '.popup__inputs-item',
    buttonElement: '.popup__button-save',
    errorClass: 'popup__inputs-error_active',
    buttonDisableClass: 'popup__button-save_disable',
}

// * наложение обработчиков на поля формы
function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(inputElement))
    inputList.forEach(inputItem => {
        inputItem.addEventListener('input', evt => {
            console.log(inputItem.validity)
        })
    })
}

function enableValidation({formElement, inputElement, buttonElement, errorElement, errorClass, buttonDisableClass}) {
    // * запуск процесса валидации
    const formList = Array.from(document.querySelectorAll(formElement));
    formList.forEach(form => {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });

        // * наложение обработчиков на поля формы
        const inputList = Array.from(form.querySelectorAll(inputElement))
        inputList.forEach(inputItem => {
            inputItem.addEventListener('input', evt => {
                console.log(inputItem.validity)
                // * проверка валидности введенных данных каждого поля
                if (inputItem.validity.valid) {
                    // * найти элемент ошибки (span)
                    // * скрыть сообщение об ошибке
                } else {
                    // * найти элемент ошибки (span)
                    const errorElement = form.querySelector(`.${inputItem.id}-error`);
                    // * показать сообщение об ошибке
                    errorElement.textContent = inputItem.validationMessage;
                    errorElement.classList.add(errorClass);
                }
            })
        });
    }); 
};

enableValidation(obj);

