const initialCards = [
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

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupCreateCard = document.querySelector('.popup_type_create-card');
const popupBigImage = document.querySelector('.popup_type_big-image')
const bigImage = popupBigImage.querySelector('.popup__big-foto');
const popupBigImageTitle = document.querySelector('.popup__title-big-image')

const popupElement = popupEditProfile.querySelector('.popup__container');
const popupButtonCloseElement = popupElement.querySelector('.popup__button-close_type_edit');
const popupCreateButtonCloseElement = popupCreateCard.querySelector('.popup__button-close_type_create');
const popupBigImageButtonClose = popupBigImage.querySelector('.popup__button-close_type_big-foto');

const cardsSection = document.querySelector('.cards');


// находим на странице profile и его элементы
const profile = document.querySelector('.profile');
const profileInfo = profile.querySelector('.profile__info');
const profileButtonEditElement = profile.querySelector('.profile__edit-button');
const profileButtonCreateCard = profile.querySelector('.profile__add-button');

// находим на странице popup и его поля Редактирования
const formElement = popupElement.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__inputs-item_type_name');
const jobInput = formElement.querySelector('.popup__inputs-item_type_description');

// Выберите элементы, куда должны быть вставлены значения полей формы Редактирования
const nameProfileValue = profileInfo.querySelector('.profile__name');
const jobProfileValue = profileInfo.querySelector('.profile__description');

// Создать новую карточку
const popupCreateElement = popupCreateCard.querySelector('.popup__container');
const formCreateElement = popupCreateElement.querySelector('.popup__form');
const popupCreateButtonClose = popupCreateElement.querySelector('.popup__button-close');
const titleInput = formCreateElement.querySelector('.popup__inputs-item_type_title');
const linkInput = formCreateElement.querySelector('.popup__inputs-item_type_link');

// функция добавления карточек через template
function renderCard(card) {
  const templateCard = document.querySelector('#template-card').content;
  const cardItem = templateCard.querySelector('.cards__item').cloneNode(true);
  cardItem.querySelector('.cards__title').textContent = card.name;
  cardItem.querySelector('.cards__item-pic').src = card.link;
  // добавить описание alt из названия
  cardItem.querySelector('.cards__item-pic').alt = card.name;
  cardItem.querySelector('.cards__union').addEventListener('click', likeHandler);
  cardItem.querySelector('.cards__item-delete').addEventListener('click', deleteCardHandler);
  cardItem.querySelector('.cards__item-pic').addEventListener('click', increaseFotoHandler);
  return cardItem;
}

// функция рендеринга списка с наименованиями карточек и добавление карточек в вертску
function renderInitialCards(initialCards) {
  initialCards.forEach((card) => {
    const cardItem = renderCard(card)
    cardsSection.append(cardItem)
  })
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

const popupActive = function closePopupClickOverlay(event) {
  if(event.target !== event.currentTarget) {
    return;
  }
  closePopup(popupEditProfile);
}


function closePopupClickOverlay(event) {
  if(event.target !== event.currentTarget) {
    return;
  }
  closePopup(popupEditProfile);
}

function closePopupBigClickOverlay(event) {
  if(event.target !== event.currentTarget) {
    return;
  }
  closePopup(popupBigImage);
}

// функция создает карточку через попап и закрывает попап
function createCard() {
  const userData = {
    name: titleInput.value,
    link: linkInput.value
  };
  const cardItem = renderCard(userData)
  cardsSection.prepend(cardItem);
  closePopup(popupCreateCard);
}

// submit для формы редактирования
function formSubmitHandler(event) {
  event.preventDefault();  // отмена отправки на сервер
  nameProfileValue.textContent = nameInput.value;
  jobProfileValue.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function formCreateSubmitHandler(event) {
  event.preventDefault();
  createCard();
  // очистка формы после создания карточки
  event.target.reset();
}

// обработка лайка
function likeHandler(cardItem) {
  cardItem.target.classList.toggle('cards__union_active');
};

// обработка удаления карточки
function deleteCardHandler(cardItem) {
  cardItem.target.closest('.cards__item').remove();
}

// обработка увеличения фото 
function increaseFotoHandler(event) {
  const item = event.target.closest('.cards__item');
  const itemTitle = item.querySelector('.cards__title').textContent;
  const itemPic = item.querySelector('.cards__item-pic').src;
  const itemAlt = item.querySelector('.cards__item-pic').alt;
  bigImage.src = itemPic;
  bigImage.alt = itemAlt;
  popupBigImageTitle.textContent = itemTitle;
  openPopup(popupBigImage);
}

// слушатель для открытия попапа Редактирования
profileButtonEditElement.addEventListener('click', function() { 
  openPopup(popupEditProfile);
});

// слушатель для открытия попапа Создания
profileButtonCreateCard.addEventListener('click', function() { 
  openPopup(popupCreateCard);
});

// слушатель для закрытия попапа Редактирования
popupButtonCloseElement.addEventListener('click', function() { 
  closePopup(popupEditProfile);
});

// слушатель для закрытия попапа Создания
popupCreateButtonCloseElement.addEventListener('click', function() { 
  closePopup(popupCreateCard);
});

// слушатель для закрытия попапа с Большой фото
popupBigImageButtonClose.addEventListener('click', function() { 
  closePopup(popupBigImage);
});


// слушатели на клик рядом с попапом
popupEditProfile.addEventListener('click', closePopupClickOverlay);
popupElement.addEventListener('click', closePopupClickOverlay);
popupBigImage.addEventListener('.click', closePopupBigClickOverlay);

// Прикрепляем обработчик к форме Редактирования:
formElement.addEventListener('submit', formSubmitHandler);

formCreateElement.addEventListener('submit', formCreateSubmitHandler);

// вызываем функцию добавления карточек при загрузке страницы
renderInitialCards(initialCards);





