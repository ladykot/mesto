import './index.css';

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import UserInfo from "../components/UserInfo.js";
import Api  from '../components/Api.js';


import { 
  cardsSection,
  Settings,
  profileButtonEditElement,
  profileButtonCreateCard,
  formElement,
  nameInput,
  jobInput,
  formCreateElement,
  avatarIcon,
  formChangeAvatar,
  configButtonState,
  popupEditProfile
} from "../utils/constants.js";

let userId

const profileEditValidator = new FormValidator(Settings, formElement);
const cardCreateValidator = new FormValidator(Settings, formCreateElement);
const avatarEditValidator = new FormValidator(Settings, formChangeAvatar);

profileEditValidator.enableValidation();
cardCreateValidator.enableValidation();
avatarEditValidator.enableValidation();

const popupImage = new PopupWithImage('.popup_type_big-image');



// экземпляр класса для работы с удаленным сервером
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45', // ссылка на бэкенд
  headers: {
    authorization: '96f24a59-2446-45e8-8a79-9c1dd75cac85',
    'Content-Type': 'application/json'
  }
})



// создаем карточку
const createCard = (item) => {
  
  const card = new Card(
  {
    data: item,
    userId: userInfo.getUserId(),
    handleCardClick: (data) => { // обработчик на картинку создает класс с большим фото
      console.log(data)
      popupImage.open(data); // получить фото по клику
    },

    handleDeleteClick: (id) => { // обработчик клика на Иконку Удаления конкретной карточки (отложенная ф-ция)

      console.log(id)
      // debugger
      popupDeleteCard.setSumbitHandler(() => {

        api.deleteCard(id)
        .then(res => {
          console.log(res)
          popupDeleteCard.close()
          card.deleteCard()
        })
        .catch(err => {
          console.log(err)
        })
      })
    },

    handelLikeClick: (id) => { // обработчик клика на Лайк
      if (card.isliked()) {
        api.deleteLike(id)
        .then(res => {
          console.log(res.likes)
          card.setLikes(res.likes)
        })
        .catch(err => {
          console.log(err)
        })
      } else {
        api.addLike(id)
        .then(res => {
        card.setLikes(res.likes)
        })
        .catch(err => {
          console.log(err)
        })
      }
    }
  }, '#template-card');

  const templateCard = card.getCard();
  return templateCard;
}

popupImage.setEventListeners();


// создаем класс с данными из профиля
const userInfo = new UserInfo({
  name: '.profile__name', 
  description: '.profile__description',
  avatar: '.profile__pic',
});



// создаем место для карточек 

const cardList = new Section({
  // item: [],
  renderer: (item) => {
    // debugger
    return createCard(item);
  }
}, cardsSection)

// вызываем метод класса Api для загрузки карточек
// api.getInitialCards()
// .then((data) => {
//   cardList.renderItems(data); // отрисовка карточек
// }).catch(err => {
//   console.log(err)
// })



// нужно сначала получить данные пользователя (вместе c id) c сервера, потом - отрисовывать карточки

Promise.all([api.getProfileData(), api.getInitialCards()])
.then(([info, initialCards]) => {
  userInfo.setUserInfo(info) // вставим в профиль данные с сервера
  userInfo.setUserAvatar(info.avatar) // и в аватар
  userId = userInfo.getUserId(info) // получить userId
  console.log(userId)
  cardList.renderItems(initialCards); // отрисовка карточек
  console.log(initialCards);
  console.log(err)
}).catch(err => {
  console.log(err)
})


// // (copy)вызываем метод класса Api для загрузки карточек 
// api.getInitialCards()
// .then((data) => {
//   debugger
//   cardList.renderItems(data)
//   // data.forEach(element => {
//   //   const card = createCard({
//   //     name: element.name,
//   //     link: element.link,
//   //     likes: element.likes,
//   //     id: element._id,
//   //     userId: userId,
//   //     ownerId: element.owner._id
//   //   })
//   // cardList.addItem(card)
//   // })
// }).catch(err => {
//   console.log(err)
// })













// создаем попап редактирования (при клике на кнопку редактирования)
const popupEdit = new PopupWithForm({
  handelSubmitForm: (data, toggleButtonState) => {
    const {name, description} = data;
    // toggleButtonState(true);
    api.editProfileData(name, description) // отправляем данные на сервер и ждем ответ
      .then(res => {
        userInfo.setUserInfo(res); // запишем НОВЫЕ данные из инпутов в профиль
        popupEdit.close();
      })
      .finally(() => {
        // toggleButtonState(false);
      })
      .catch(err => {
        console.log(err);
      })
    
  },
  popupSelector: '.popup_type_edit-profile',
  // configButtonState // Сохранить или Сохраняю
});

popupEdit.setEventListeners();


// создаем попап смены Аватара
const popupChangeAvatar = new PopupWithForm({
  handelSubmitForm: (data) => {
    const avatar = data.link;
    api.changeAvatar(avatar)
      .then(res => {
        const avatar = res.avatar;
        userInfo.setUserAvatar(avatar); // передаем данные и ссылку на аватар
      popupChangeAvatar.close();
      })
      .catch(err => {
        console.log(err)
      })
  }, popupSelector: '.popup_type_change-avatar'
})

popupChangeAvatar.setEventListeners();


// создаем попап добавления новой карточки (при клике на кнопку плюсик)
const popupCreate = new PopupWithForm({
  handelSubmitForm: (data) => { // обработчик создает новую карточку по данным пользователя
    api.addCard(data.name, data.link)
      .then(res => {
        console.log('получили данные для карточки', res)
        cardList.addItem(createCard(res));
        popupCreate.close();
      })
      .catch(err => {
        console.log(err)
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
  profileEditValidator.resetErrors();
});


// слушатель для открытия попапа Создания
profileButtonCreateCard.addEventListener('click', function() { 
  cardCreateValidator.disableSubmitButton();
  popupCreate.open();
  cardCreateValidator.resetErrors();
});

// слушатель для открытия попапа Смены Аватара
avatarIcon.addEventListener('click', function() {
  popupChangeAvatar.open()
  avatarEditValidator.resetErrors()
})


// создать попап подтверждения удаления карточки
const popupDeleteCard = new PopupWithSubmit('.popup_type_delete-card')

popupDeleteCard.setEventListeners();



