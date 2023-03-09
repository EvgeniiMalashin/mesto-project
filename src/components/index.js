import '../pages/index.css';
import {
  parametrs,
  popups, popupEditOpen, popupEdit,
  popupAddOpen, popupAdd,
  cardsList, formEditProfile, nameInput,
  aboutNameInput, username, description,
  formCardAdd, titleInput,
  linkInput, popupAvatar, popupAvatarOpen,
  formAvatarEdit, avatarInput, avatar, userSelf,
  closeButtons} from './constants.js'
import { enableValidation } from './validate.js'
import { openPopup, closePopup } from './modal.js'
import { submitEditProfile, submitCardForm, editAvatarForm } from './utils.js'
import { createElement } from './card.js'
import { getUserInfo, getStartCards } from './api.js'


//получили данные с сервера
Promise.all([getUserInfo(), getStartCards()])
  .then(([user, cards]) => {
    username.textContent = user.name;
    description.textContent = user.about;
    userSelf.id = user._id;
    avatar.src = user.avatar;
    
    //добавляем в разметку карточки
    cards.forEach((card) => {
      cardsList.append(createElement(card, userSelf))
    });
  })
  .catch((err) => {
    console.log(err); 
  });

//перебор массива попапов для закрытия по оверлею
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
  })
})

// универсальный крестик
closeButtons.forEach((button) => { 
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//открытие и закрытие попапа редактирования
popupEditOpen.addEventListener('click', function () {
  openPopup(popupEdit);
  nameInput.value = username.textContent;
  aboutNameInput.value = description.textContent;
});
formEditProfile.addEventListener('submit', submitEditProfile);

//открытие и закрытие попапа добавления нового фото
popupAddOpen.addEventListener('click', () => {
  titleInput.value = '';
  linkInput.value = '';
  openPopup(popupAdd);
});
formCardAdd.addEventListener('submit', submitCardForm);

//открытие попапа редактирования аватарки
popupAvatarOpen.addEventListener('click', () => {
  openPopup(popupAvatar);
  avatarInput.value = avatar.src;
});
formAvatarEdit.addEventListener('submit', editAvatarForm);

//валидация
enableValidation(parametrs);
