const obj = {
    formElement: '.popup__form',
    inputElement: '.popup__inputs-item',
    buttonElement: '.popup__button-save',
    errorElement: `.${inputElement.id}-error`,
    errorClass: 'popup__inputs-error_active',
    buttonDisableClass: 'popup__button-save_disable',
}


function enableValidation({formElement, inputElement, buttonElement, errorElement, errorClass, buttonDisableClass}) {
    const forms = Array.from(document.querySelectorAll(formElement));
    forms.forEach(form => {
        // отменяем отправку формы
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });    
    });
};

enableValidation(obj);