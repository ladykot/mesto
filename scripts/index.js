const popup = document.querySelector('.popup');
const popupElement = popup.querySelector('.popup__container');
const popupButtonCloseElement = popupElement.querySelector('.popup__button-close');

let profile = document.querySelector('.profile');
let profileInfo = profile.querySelector('.profile__info')
const profileButtonEditElement = profile.querySelector('.profile__edit-button'); 

let formElement = popupElement.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__inputs-item_type_name');
let jobInput = formElement.querySelector('.popup__inputs-item_type_description');

// Выберите элементы, куда должны быть вставлены значения полей
let nameProfileValue = profileInfo.querySelector('.profile__name');
let jobProfileValue = profileInfo.querySelector('.profile__description');

const openPopup = function() {
    popup.classList.add('popup_opened');
    // Получите значение полей jobInput и nameInput из свойства value
    let nameInputValue = nameInput.value;
    let jobInputValue = jobInput.value;
    nameInputValue = nameProfileValue.textContent;
    jobInputValue = jobProfileValue.textContent;
}

const closePopup = function() {
    popup.classList.remove('popup_opened');
}

const closePopupClickOverlay = function(event) {
    if(event.target !== event.currentTarget) {
        return;
    }
    closePopup(); 
}

profileButtonEditElement.addEventListener('click', openPopup);
popupButtonCloseElement.addEventListener('click', closePopup);
popup.addEventListener('click', closePopupClickOverlay);
popupElement.addEventListener('click', closePopupClickOverlay);


function formSubmitHandler (event) {
    event.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value
    let nameInputValue = nameInput.value;
    let jobInputValue = jobInput.value;

    // Вставьте новые значения с помощью textContent
    nameProfileValue.textContent = nameInputValue;
    jobProfileValue.textContent = jobInputValue;
    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

