import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import { 
  cardsSection,
  initialCards,
  Settings,
  profileButtonEditElement,
  profileButtonCreateCard,
  formElement,
  nameInput,
  jobInput,
  formCreateElement,
} from "./constants.js";

const editProfileValidator = new FormValidator(Settings, formElement);
const createCardValidator = new FormValidator(Settings, formCreateElement);

editProfileValidator.enableValidation();
createCardValidator.enableValidation();

// создаем карточку
const createCard = (item) => {
  const card = new Card({data: item, handleCardClick: (item) => { // обработчик на картинку создает класс с большим фото
    const popupImage = new PopupWithImage(item, '.popup_type_big-image');
    popupImage.open(); // получить фото по клику
    popupImage.setEventListeners(); // закрытия
  }}, '#template-card');
  const templateCard = card.getCard();
  return templateCard;
}


// отрисовка всех карточек в разметке
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
}}, cardsSection)

cardList.renderItems();

// создаем класс с данными из профиля
const userInfo = new UserInfo({
  name: '.profile__name', 
  description: '.profile__description'
});


// создаем попап редактирования (при клике на кнопку редактирования)
const popupEdit = new PopupWithForm({
  handelSubmitForm: (data) => {
    userInfo.setUserInfo(data);  // запишем НОВЫЕ данные из инпутов в профиль
    popupEdit.close();
  }, popupSelector: '.popup_type_edit-profile'
});

popupEdit.setEventListeners();


// создаем попап добавления новой карточки (при клике на кнопку плюсик)
const popupCreate = new PopupWithForm({
  handelSubmitForm: (data) => { // обработчик создает новую карточку по данным пользователя
    const card = createCard(data);  // data должно = {name, link}
    cardList.addItem(card); // добавляем карточку в разметку
    popupCreate.close();
  }, popupSelector: '.popup_type_create-card'
});

popupCreate.setEventListeners();


// слушатель для открытия попапа Редактирования
profileButtonEditElement.addEventListener('click', function() { 
  const {name, description} = userInfo.getUserInfo(); // взять данные из профиля
  nameInput.value = name; // записать в инпуты попапа
  jobInput.value = description;
  popupEdit.open();
});

// слушатель для открытия попапа Создания
profileButtonCreateCard.addEventListener('click', function() { 
  createCardValidator.disableSubmitButton();
  popupCreate.open();
});
