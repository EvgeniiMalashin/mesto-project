import '../pages/index.css';
import { initialCards, popupEdit, popupEditOpen, popupEditClose, popupEditSave, formEditProfile, nameInput, aboutNameInput, username, description, 
  popupAdd, popupAddOpen, popupAddClose, popupAddCreate, cardsList, titleInput, linkInput, formCardAdd, popupImg, popupImgClose, popups, parametrs
  } from './constants';
import { openPopup, closePopup } from './modal';
import { createElement } from './card';
import { enableValidation } from './validate';
import { submitCardForm, submitEditProfile } from './utils';

//методом перебора добавляем в разметку стартовые карточки
initialCards.forEach(item => {
  cardsList.append(createElement(item.link, item.name));
});

//открытие и закрытие попапа редактирования с исходными или внесенными данными
popupEditOpen.addEventListener('click', function () {
  nameInput.value = username.textContent;
  aboutNameInput.value = description.textContent;
  openPopup(popupEdit);
})
popupEditClose.addEventListener('click', function () {
  closePopup(popupEdit);
})

formEditProfile.addEventListener('submit', submitEditProfile);
popupEditSave.addEventListener('click', function () {
closePopup(popupEdit);
});

//открытие и закрытие попапа добавления карточки
popupAddOpen.addEventListener('click', () => {
  openPopup(popupAdd);
});
popupAddClose.addEventListener('click', () => {
  closePopup(popupAdd);
});

//добавление карточки

formCardAdd.addEventListener('submit', submitCardForm);

popupImgClose.addEventListener('click', function () {
  closePopup(popupImg);
});

// зарытие по оверлею
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
  })
});

enableValidation(parametrs);