const popup = document.querySelector('.popup_type_edit-profile');
const popupElement = popup.querySelector('.popup__container');
const popupButtonCloseElement = popupElement.querySelector('.popup__button-close');

// находим на странице profile и его элементы
let profile = document.querySelector('.profile');
let profileInfo = profile.querySelector('.profile__info');
const profileButtonEditElement = profile.querySelector('.profile__edit-button');
const profileButtonCreateCard = profile.querySelector('.profile__add-button');

// находим на странице popup и его поля Редактирования
let formElement = popupElement.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__inputs-item_type_name');
let jobInput = formElement.querySelector('.popup__inputs-item_type_description');

// Выберите элементы, куда должны быть вставлены значения полей формы Редактирования
let nameProfileValue = profileInfo.querySelector('.profile__name');
let jobProfileValue = profileInfo.querySelector('.profile__description');


// функция открытия попапа редактирования
const openPopup = function() {
    popup.classList.add('popup_opened');
    // Получите значение полей jobInput и nameInput из свойства value
    let nameInputValue = nameInput.value;
    let jobInputValue = jobInput.value;
    nameInputValue = nameProfileValue.textContent;
    jobInputValue = jobProfileValue.textContent;
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


function formSubmitHandler (event) {
    event.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value
    let nameInputValue = nameInput.value;
    let jobInputValue = jobInput.value;

    // Вставьте новые значения с помощью textContent
    nameProfileValue.textContent = nameInputValue;
    jobProfileValue.textContent = jobInputValue;
    closePopup();
}

// Прикрепляем обработчик к форме Редактирования:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);


// Прикрепить обработчик к форме Создания карточки


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


const cardsSection = document.querySelector('.cards');

// функция добавления карточек через template
function renderCard(card) {
    const templateCard = document.querySelector('#template-card').content;
    const cardItem = templateCard.querySelector('.cards__item').cloneNode(true);
    cardItem.querySelector('.cards__title').textContent = card.name;
    cardItem.querySelector('.cards__item-pic').src = card.link;
    cardsSection.append(cardItem);
}
// функция рендеринга списка с наименованиями карточек
function renderInitialCards(initialCards) {
    initialCards.forEach(renderCard);
}
// вызываем функцию добавления карточек при загрузке страницы
renderInitialCards(initialCards);

//----------------------------------------------------------


// Создать карточку

const popupCreateCard = document.querySelector('.popup_type_create-card');
const popupCreateElement = popupCreateCard.querySelector('.popup__container');
const popupCreateButtonClose = popupCreateElement.querySelector('.popup__button-close');
let titleInput = formElement.querySelector('.popup__inputs-item_type_title');
let linkInput = formElement.querySelector('.popup__inputs-item_type_link');

const openCreatePopup = function() {
  popupCreateCard.classList.add('popup_opened');
}

const closeCreatePopup = function() {
  popupCreateCard.classList.remove('popup_opened')
}

profileButtonCreateCard.addEventListener('click', openCreatePopup);
popupCreateButtonClose.addEventListener('click', closeCreatePopup);

function formCreateSubmitHandler(event) {
  event.preventDefault();

}

function formSubmitHandler (event) {
  event.preventDefault();
  // Получите значение полей jobInput и nameInput из свойства value
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;

  // Вставьте новые значения с помощью textContent
  nameProfileValue.textContent = nameInputValue;
  jobProfileValue.textContent = jobInputValue;
  closePopup();
}

// Выбрать элементы для вставки значений карточек





