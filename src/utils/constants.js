export const profile = document.querySelector('.profile');
export const profileButtonEditElement = profile.querySelector('.profile__edit-button');
export const profileButtonCreateCard = profile.querySelector('.profile__add-button');
export const formElement = document.forms['edit-profile'];
export const nameInput = formElement.querySelector('.popup__inputs-item_type_name');
export const jobInput = formElement.querySelector('.popup__inputs-item_type_description');
export const formCreateElement = document.forms['create-card'];

// данные для карточек
export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

// место для вставки карточек
export const cardsSection = document.querySelector('.cards');

export const Settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__inputs-item',
    inputInvalidSelector: '.popup__inputs-item_invalid',
    buttonSelector: '.popup__button-save',
    errorClass: 'popup__inputs-error_active',
    buttonDisableClass: 'popup__button-save_disable',
}

export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
