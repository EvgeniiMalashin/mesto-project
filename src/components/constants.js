// попап профиля
const popupEdit = document.querySelector('#popup-edit');
const popupEditOpen = document.querySelector('.profile__edit-button');
const username = document.querySelector('.profile__name');
const description = document.querySelector('.profile__about-name');
const formEditProfile = popupEdit.querySelector('#edit-profile');
const nameInput = popupEdit.querySelector('#name');
const aboutNameInput = popupEdit.querySelector('#about-name');

//попап карточки

const popupAdd = document.querySelector('#popup-add');
const popupAddOpen = document.querySelector('.profile__add-button');
const titleInput = popupAdd.querySelector('#title');
const linkInput = popupAdd.querySelector('#link');
const formCardAdd = popupAdd.querySelector('#add-card');
const imgInsert = document.querySelector('.popup__img');
const nameInsert = document.querySelector('.popup__caption');


const cardsList = document.querySelector('.elements'); //для карточек

//попап аватарки
const avatar = document.querySelector('.profile__avatar');
const popupAvatar = document.querySelector('#popup-avatar');
const popupAvatarOpen = document.querySelector('.profile__avatar-hover');
const avatarInput = popupAvatar.querySelector('#avatar');
const formAvatarEdit = popupAvatar.querySelector('#avatar-edit');

// универсальный крестик, All --> 's!!!
const closeButtons = document.querySelectorAll('.popup__icon');

//константа из card
const elementTemplate = document.querySelector('#element-template').content; 


const popupImg = document.querySelector('#popup-view-img');
const popups = document.querySelectorAll('.popup');
const userSelf = document.querySelector('.profile');


const parametrs = {
  formSelector: '.popup__container',
  inputSelector: '.popup__put-field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__put-field_type_error',
  errorClass: 'popup__put-field-error_active'
};

export { popupEdit, popupEditOpen, formEditProfile, nameInput, aboutNameInput, username, description, 
    popupAdd, popupAddOpen, cardsList, titleInput, linkInput, formCardAdd, popupImg, imgInsert,
    nameInsert, popups, parametrs, closeButtons, elementTemplate, avatar, popupAvatar, popupAvatarOpen, avatarInput, userSelf, formAvatarEdit, 
     };