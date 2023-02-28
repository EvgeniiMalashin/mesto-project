// массив стартовых карточек
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

  // Объявление
const popupEdit = document.querySelector('#popup-edit');
const popupEditOpen = document.querySelector('.profile__edit-button');
const popupEditClose = popupEdit.querySelector('.popup__icon');
const popupEditSave = popupEdit.querySelector('.popup__submit-button');
const formEditProfile = popupEdit.querySelector('#edit-profile');
const nameInput = popupEdit.querySelector('#name');
const aboutNameInput = popupEdit.querySelector('#about-name');
const username = document.querySelector('.profile__name');
const description = document.querySelector('.profile__about-name');

const popupAdd = document.querySelector('#popup-add');
const popupAddOpen = document.querySelector('.profile__add-button');
const popupAddClose = popupAdd.querySelector('.popup__icon');
const popupAddCreate = popupAdd.querySelector('.popup__submit-button');
const cardsList = document.querySelector('.elements');

const titleInput = popupAdd.querySelector('#title');
const linkInput = popupAdd.querySelector('#link');
const formCardAdd = popupAdd.querySelector('#add-card');

const popupImg = document.querySelector('#popup-view-img');
const popupImgClose = popupImg.querySelector('.popup__icon');
const imgInsert = document.querySelector('.popup__img');
const nameInsert = document.querySelector('.popup__caption');
const popups = document.querySelectorAll('.popup');

const parametrs = {
  formSelector: '.popup__container',
  inputSelector: '.popup__put-field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__put-field_type_error',
  errorClass: 'popup__put-field-error_active'
};

export {initialCards, popupEdit, popupEditOpen, popupEditClose, popupEditSave, formEditProfile, nameInput, aboutNameInput, username, description, 
    popupAdd, popupAddOpen, popupAddClose, popupAddCreate, cardsList, titleInput, linkInput, formCardAdd, popupImg, popupImgClose, imgInsert,
    nameInsert, popups, parametrs};