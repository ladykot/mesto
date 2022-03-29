

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupCreateCard = document.querySelector('.popup_type_create-card');
const popupBigImage = document.querySelector('.popup_type_big-image');
const bigImage = popupBigImage.querySelector('.popup__big-foto');
const popupBigImageTitle = document.querySelector('.popup__title-big-image')

const popupElementEdit = document.querySelector('.popup__container_edit-profile');
const popupElementCreate = document.querySelector('.popup__container_create-card');
const popupElementBigImage = popupBigImage.querySelector('.popup__container_big-image');

const popupButtonCloseElement = popupElementEdit.querySelector('.popup__button-close_type_edit');
const popupCreateButtonCloseElement = popupCreateCard.querySelector('.popup__button-close_type_create');
const popupBigImageButtonClose = popupBigImage.querySelector('.popup__button-close_type_big-foto');

const cardsSection = document.querySelector('.cards');


// находим на странице profile и его элементы
const profile = document.querySelector('.profile');
const profileInfo = profile.querySelector('.profile__info');
const profileButtonEditElement = profile.querySelector('.profile__edit-button');
const profileButtonCreateCard = profile.querySelector('.profile__add-button');

// находим на странице popup и его поля Редактирования
const formElement = popupElementEdit.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__inputs-item_type_name');
const jobInput = formElement.querySelector('.popup__inputs-item_type_description');

// Выберите элементы, куда должны быть вставлены значения полей формы Редактирования
const nameProfileValue = profileInfo.querySelector('.profile__name');
const jobProfileValue = profileInfo.querySelector('.profile__description');

// Создать новую карточку
const formCreateElement = popupElementCreate.querySelector('.popup__form');
const popupCreateButtonClose = popupElementCreate.querySelector('.popup__button-close');
const titleInput = formCreateElement.querySelector('.popup__inputs-item_type_title');
const linkInput = formCreateElement.querySelector('.popup__inputs-item_type_link');
const templateCard = document.querySelector('#template-card');

const buttonSubmitElement = formCreateElement.querySelector('.popup__button-save');

// функция добавления карточек через template
function renderCard(card) {
  const cardItem = templateCard.content.querySelector('.cards__item').cloneNode(true);
  cardItem.querySelector('.cards__title').textContent = card.name;
  cardItem.querySelector('.cards__item-pic').src = card.link;
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
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function closePopupClickOverlay(event) {
  // кликнули в зону попапа
  if(event.target !== event.currentTarget) {
    return;
  }
  const popupActive = document.querySelector('.popup_opened');
  closePopup(popupActive);
}

// функция создает карточку через попап и закрывает попап
function createCard() {
  const userData = {
    name: titleInput.value,
    link: linkInput.value
  };
  const cardItem = renderCard(userData)
  cardsSection.prepend(cardItem);
  buttonSubmitElement.classList.add('popup__button-save_disable');
  buttonSubmitElement.setAttribute('disabled', true);
  closePopup(popupCreateCard);
}

// submit для формы редактирования
function handleProfileFormSubmit(event) {
  event.preventDefault();  // отмена отправки на сервер
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

function addValuesEditPopup() {
  nameInput.value = nameProfileValue.textContent; 
  jobInput.value = jobProfileValue.textContent;
}

// слушатель для открытия попапа Редактирования
profileButtonEditElement.addEventListener('click', function() { 
  openPopup(popupEditProfile);
  addValuesEditPopup();
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


function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
  }
}


popupEditProfile.addEventListener('click', closePopupClickOverlay);
popupCreateCard.addEventListener('click', closePopupClickOverlay);
popupBigImage.addEventListener('click', closePopupClickOverlay);
popupElementEdit.addEventListener('click', closePopupClickOverlay);
popupElementCreate.addEventListener('click', closePopupClickOverlay);
popupElementBigImage.addEventListener('click', closePopupClickOverlay);


formCreateElement.addEventListener('submit', handleAddCardFormSubmit);

// вызываем функцию добавления карточек при загрузке страницы
renderInitialCards(initialCards);





