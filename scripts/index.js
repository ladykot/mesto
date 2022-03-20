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

const popup = document.querySelector('.popup_type_edit-profile');
const popupCreateCard = document.querySelector('.popup_type_create-card');
const popupBigFoto = document.querySelector('.popup_type_big-image')
const popupElement = popup.querySelector('.popup__container');
const popupButtonCloseElement = popupElement.querySelector('.popup__button-close_type_edit');
const popupCreateButtonCloseElement = popupCreateCard.querySelector('.popup__button-close_type_create');

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


// Получить значение полей jobInput и nameInput из свойства value и вставить в попап при открытии
function inputDataProfile() {
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;
  nameInputValue = nameProfileValue.textContent;
  jobInputValue = jobProfileValue.textContent;
}

function openPopup(element) {
  element.classList.add('popup_opened');

  if (element == popup) {
    inputDataProfile()
  }
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}

function closePopupClickOverlay(event) {
    if(event.target !== event.currentTarget) {
      return;
    }
    closePopup(popup);
}


// Todo: уничерсальный слушатель на открытие/закрытие
// Параметр функции - кнопка

// слушатель для открытия попапа Редактирования
profileButtonEditElement.addEventListener('click', function() { 
  openPopup(popup);
});

// слушатель для открытия попапа Создания
profileButtonCreateCard.addEventListener('click', function() { 
  openPopup(popupCreateCard);
});

// слушатель для закрытия попапа Редактирования
popupButtonCloseElement.addEventListener('click', function() { 
  closePopup(popup);
});

// слушатель для закрытия попапа Создания
popupCreateButtonCloseElement.addEventListener('click', function() { 
  closePopup(popupCreateCard);
});


// слушатели на клик рядом с попапом
popup.addEventListener('click', closePopupClickOverlay);
popupElement.addEventListener('click', closePopupClickOverlay);


function formSubmitHandler(event) {
    event.preventDefault();  // отмена отправки на сервер
    inputDataProfile()
    closePopup();
}

// Прикрепляем обработчик к форме Редактирования:
formElement.addEventListener('submit', formSubmitHandler);


// функция добавления карточек через template
function renderCard(card) {
  const templateCard = document.querySelector('#template-card').content;
  const cardItem = templateCard.querySelector('.cards__item').cloneNode(true);
  cardItem.querySelector('.cards__title').textContent = card.name;
  cardItem.querySelector('.cards__item-pic').src = card.link;
  cardItem.querySelector('.cards__union').addEventListener('click', likeHandler);
  cardItem.querySelector('.cards__item-delete').addEventListener('click', deleteCardHandler);
  return cardItem
}

// функция рендеринга списка с наименованиями карточек и добавление карточек в вертску
function renderInitialCards(initialCards) {
  initialCards.forEach((card) => {
    const cardItem = renderCard(card)
    cardsSection.append(cardItem)
  })
}

// вызываем функцию добавления карточек при загрузке страницы
renderInitialCards(initialCards);

// функция создает карточку через попап и закрывает попап
function CreateCard() {
  const cardItem = renderCard()
  cardsSection.prepend(cardItem);
  closePopup(popupCreateCard);
}

function formCreateSubmitHandler (event) {
  event.preventDefault();
  CreateCard();
}

formCreateElement.addEventListener('submit', formCreateSubmitHandler);

// обработка лайка
function likeHandler(cardItem) {
  cardItem.target.classList.toggle('cards__union_active');
};

// обработка удаления карточки
function deleteCardHandler(cardItem) {
  cardItem.target.closest('.cards__item').remove();
}

