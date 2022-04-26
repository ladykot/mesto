export const popupBigImage = document.querySelector('.popup_type_big-image');
export const bigImage = popupBigImage.querySelector('.popup__big-foto');
export const popupBigImageTitle = document.querySelector('.popup__title-big-image');

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

export const dataOverlay = {
    popupBigImage: '.popup_type_big-image',
    popupEditProfile: '.popup_type_edit-profile',
    popupCreateCard: '.popup_type_create-card',
    popupElementEdit: '.popup__container_edit-profile',
    popupElementCreate: '.popup__container_create-card',
    popupElementBigImage: '.popup__container_big-image',
}