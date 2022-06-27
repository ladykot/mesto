import './index.css';

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { api } from '../components/Api.js'; // импортируем экземпляр

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
} from "../utils/constants.js";


const editProfileValidator = new FormValidator(Settings, formElement);
const createCardValidator = new FormValidator(Settings, formCreateElement);

editProfileValidator.enableValidation();
createCardValidator.enableValidation();

const popupImage = new PopupWithImage('.popup_type_big-image');


// создаем карточку
const createCard = (item) => {
  const card = new Card({data: item, handleCardClick: (item) => { // обработчик на картинку создает класс с большим фото
    popupImage.open(item); // получить фото по клику
  }}, '#template-card');
  const templateCard = card.getCard();
  return templateCard;
}

popupImage.setEventListeners();




// const cards = getDataCards()
// console.log("Карточки",cards)


// отрисовка всех карточек в разметке
// const cardList = new Section({
//   items: initialCards, // сюда записать другой способ отображения карточек (из объекта запроса)
//   renderer: (item) => {
//     cardList.addItem(createCard(item));
// }}, cardsSection)

// cardList.renderItems();



// создаем класс с данными из профиля (переписать в функцию?)

const userInfo = new UserInfo({
  name: '.profile__name', 
  description: '.profile__description',
  avatar: '.profile__pic'
});


// вызываем метод класса Api для загрузки данных в профиль 
api.getProfileData()
.then((data) => {
  const dataProfile = { 
    // создать объект с данными для профиля
      name: data.name,
      description: data.about,
      avatar: data.avatar
  };
  userInfo.setUserInfo(dataProfile) // вставим в профиль)
})

// вызываем метод класса Api для загрузки карточек
api.getInitialCards()
.then((data) => {
  data.forEach(element => {
    const card = createCard({
      name: element.name,
      link: element.link
    })
  cardList.addItem(card)
  })
})

// создаем место для карточек (пустое, чтобы загрузить данные с сервера)
const cardList = new Section({
  items: [],
  renderer: (item) => {
    cardList.addItem(createCard(item));
}}, cardsSection)




// создаем попап редактирования (при клике на кнопку редактирования)
const popupEdit = new PopupWithForm({
  handelSubmitForm: (data) => {
    const {name, description} = data
    api.editProfileData(name, description) // отправляем данные на сервер и ждем ответ
      .then(res => {
        userInfo.setUserInfo(name, description); // запишем НОВЫЕ данные из инпутов в профиль
      })
    popupEdit.close();
  }, popupSelector: '.popup_type_edit-profile'
});

popupEdit.setEventListeners();

// создаем попап добавления новой карточки (при клике на кнопку плюсик)
const popupCreate = new PopupWithForm({
  handelSubmitForm: (data) => { // обработчик создает новую карточку по данным пользователя
    api.addCard(data.name, data.link)
      .then(res => {
        console.log("res", res)
        const card = createCard({
          name: res.name,
          link: res.link
        });
      cardList.addItem(card);
      popupCreate.close();
      })
  }, popupSelector: '.popup_type_create-card'
});

popupCreate.setEventListeners();


// слушатель для открытия попапа Редактирования
profileButtonEditElement.addEventListener('click', function() { 
  const {name, description} = userInfo.getUserInfo(); // взять данные из профиля
  nameInput.value = name; // записать в инпуты попапа
  jobInput.value = description;
  popupEdit.open();
  editProfileValidator.resetErrors();
});

// слушатель для открытия попапа Создания
profileButtonCreateCard.addEventListener('click', function() { 
  createCardValidator.disableSubmitButton();
  popupCreate.open();
  createCardValidator.resetErrors();
});
