import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
// import { openPopup, closePopup } from "./utils.js";
import { 
  popupBigImage,
  cardsSection,
  initialCards,
  Settings,
} from "./constants.js";

import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupCreateCard = document.querySelector('.popup_type_create-card');

const popupElementEdit = document.querySelector('.popup__container_edit-profile');
const popupElementCreate = document.querySelector('.popup__container_create-card');
const popupElementBigImage = popupBigImage.querySelector('.popup__container_big-image');

const popupButtonCloseElement = popupElementEdit.querySelector('.popup__button-close_type_edit');
const popupCreateButtonCloseElement = popupCreateCard.querySelector('.popup__button-close_type_create');
const popupBigImageButtonClose = popupBigImage.querySelector('.popup__button-close_type_big-foto');



// находим на странице profile и его элементы
const profile = document.querySelector('.profile');
const profileInfo = profile.querySelector('.profile__info');
const profileButtonEditElement = profile.querySelector('.profile__edit-button');
const profileButtonCreateCard = profile.querySelector('.profile__add-button');

// находим на странице popup и его поля Редактирования
const formElement = document.forms['edit-profile'];
const nameInput = formElement.querySelector('.popup__inputs-item_type_name');
const jobInput = formElement.querySelector('.popup__inputs-item_type_description');

// Выберите элементы, куда должны быть вставлены значения полей формы Редактирования
const nameProfileValue = profileInfo.querySelector('.profile__name');
const jobProfileValue = profileInfo.querySelector('.profile__description');

// Создать новую карточку
const formCreateElement = document.forms['create-card'];
const titleInput = formCreateElement.querySelector('.popup__inputs-item_type_title');
const linkInput = formCreateElement.querySelector('.popup__inputs-item_type_link');

const editProfileValidator = new FormValidator(Settings, formElement);
const createCardValidator = new FormValidator(Settings, formCreateElement);


editProfileValidator.enableValidation();
createCardValidator.enableValidation();

// создаем карточку
const createCard = (item) => {
  const card = new Card({data: item, handleCardClick: (item) => { // обработчик на картинку создает класс с большим фото
    const popupImage = new PopupWithImage(item, '.popup_type_big-image');
    popupImage.open(); // получить фото по клику
    popupImage.setEventListeners(); // закрыть по крестику
  }}, '#template-card');
  return card.getCard();
}


// отрисовка всех карточек в разметке
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
}}, cardsSection)


cardList.renderItems();



// const popup = new Popup(".popup_type_edit-profile");









// // функция возвращает разметку карточки
// function getCardItem(data) {
//   const card = new Card({data, handleCardClick: () => {}}, '#template-card');
//   // забираем дом-элемент:
//   const cardItem = card.getCard();
//   return cardItem;
// }

// // функция добавления карточек в вертску c помощью класса Card (должен делать класс Section)
// function renderInitialCards(initialCards) {
//   initialCards.forEach((data) => {
//     const cardItem = getCardItem(data);
//     cardsSection.append(cardItem);
//   });
// }



// // функция создает карточку через попап и закрывает попап (c помощью класса Card)
// function createCard() {
//   // берем данные из ипутов
//   const data = {
//     name: titleInput.value,
//     link: linkInput.value
//   };
//   const cardItem = getCardItem(data);
//   cardsSection.prepend(cardItem);
//   createCardValidator.disableSubmitButton();
//   closePopup(popupCreateCard);
// }

// submit для формы редактирования
function handleProfileFormSubmit() {
  nameProfileValue.textContent = nameInput.value;
  jobProfileValue.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function handleAddCardFormSubmit(event) {
  event.preventDefault();
  createCard();
  // очистка формы после создания карточки
  event.target.reset();
}

function addValuesEditPopup() {
  nameInput.value = nameProfileValue.textContent; 
  jobInput.value = jobProfileValue.textContent;
}

// слушатель для открытия попапа Редактирования
profileButtonEditElement.addEventListener('click', function() { 
  popup.open();
  addValuesEditPopup();
});

// слушатель для открытия попапа Создания
profileButtonCreateCard.addEventListener('click', function() { 
  createCardValidator.disableSubmitButton();
  openPopup(popupCreateCard);
});



// Слушатели закрытия попапа перенести в класс Popup

// слушатель для закрытия попапа Редактирования
// popupButtonCloseElement.addEventListener('click', function() { 
//   popup.close();
// });

// слушатель для закрытия попапа Создания
popupCreateButtonCloseElement.addEventListener('click', function() { 
  closePopup(popupCreateCard);
});

// слушатель для закрытия попапа с Большой фото
// popupBigImageButtonClose.addEventListener('click', function() { 
//   closePopup(popupBigImage);
// });


// popupEditProfile.addEventListener('click', closePopupClickOverlay);
// popupCreateCard.addEventListener('click', closePopupClickOverlay);
// popupBigImage.addEventListener('click', closePopupClickOverlay);
// popupElementEdit.addEventListener('click', closePopupClickOverlay);
// popupElementCreate.addEventListener('click', closePopupClickOverlay);
// popupElementBigImage.addEventListener('click', closePopupClickOverlay);


formCreateElement.addEventListener('submit', handleAddCardFormSubmit);
formElement.addEventListener('submit', handleProfileFormSubmit);

// вызываем функцию добавления карточек при загрузке страницы
// renderInitialCards(initialCards);







