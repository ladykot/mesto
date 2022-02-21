const popup = document.querySelector('.popup');
const popupElement = popup.querySelector('.popup__container');
const popupButtonCloseElement = popupElement.querySelector('.popup__button-close');
const profile = document.querySelector('.profile');
const profileButtonEditElement = profile.querySelector('.profile__edit-button');

console.log(popup);
console.log(popupElement);
console.log(popupButtonCloseElement);

const togglePopupVisibility = function() {
    popup.classList.toggle('popup_opened');
}

const openPopup = function() {
    popup.classList.add('popup_opened');
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
