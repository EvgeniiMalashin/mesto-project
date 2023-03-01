import '../pages/index.css';
import { initialCards, popupEdit, popupEditOpen, formEditProfile, nameInput, aboutNameInput, username, description, 
  popupAdd, popupAddOpen, cardsList, formCardAdd, popups, parametrs, closeButtons} from './constants';
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
});

// универсальный крестик
closeButtons.forEach((button) => { 
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//сабмит профиля
formEditProfile.addEventListener('submit', submitEditProfile);

//открытие и закрытие попапа добавления карточки
popupAddOpen.addEventListener('click', () => {
  openPopup(popupAdd);
});

//добавление карточки
formCardAdd.addEventListener('submit', submitCardForm);

// зарытие по оверлею
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
  })
});

//валидация
enableValidation(parametrs);