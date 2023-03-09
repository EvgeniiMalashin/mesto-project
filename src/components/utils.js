import { username, description, popupAdd, popupEdit, nameInput, aboutNameInput, titleInput, linkInput, avatar,
  popupAvatar, avatarInput, userSelf, cardsList } from "./constants";
import { closePopup } from "./modal";
import { createElement } from "./card";
import { patchEditProfile, postNewCard, patchAvatarEdit } from './api.js';

//проверка ответа сервера
function checkResponse(res) {      
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

// принимает два аргумента
function request(url, options) {
  return fetch(url, options)
  .then(checkResponse);
};

//функция профиля
function submitEditProfile(evt) {
  function makeRequest() {
    return patchEditProfile(nameInput.value, aboutNameInput.value)
      .then((res) => {
        username.textContent = res.name;
        description.textContent = res.about;
        closePopup(popupEdit);
      })
  }
  handleSubmit(makeRequest, evt);
};

//функция карточки
function submitCardForm(evt) {
  function makeRequest() {
    return postNewCard(titleInput.value, linkInput.value)
      .then((card) => {
        closePopup(popupAdd);
        cardsList.prepend(createElement(card, userSelf));
      })
  }
  handleSubmit(makeRequest, evt);
};

//функция аватарки
function editAvatarForm(evt) {
  function makeRequest() {
    return patchAvatarEdit(avatarInput.value)
      .then((res) => {
        avatar.src = res.avatar;
        evt.target.reset();
        closePopup(popupAvatar);
      })
  }
  handleSubmit(makeRequest, evt);
};

//функция изменения кнопки сохранить
function renderLoading(isLoading, popupButton, buttonText = 'Сохранить', loadingText = 'Сохранение...') {
  if (isLoading) {
    popupButton.textContent = loadingText;
  } else {
    popupButton.textContent = buttonText;
  }
};

//универсальная функция с функцией запроса, объекта события и текста сохранения
function handleSubmit(request, evt, loadingText = "Сохранение...") {
  evt.preventDefault();
  const submitButton = evt.submitter;
  const initialText = submitButton.textContent;
  renderLoading(true, submitButton, initialText, loadingText);
  request()
    .then(() => {
      evt.target.reset();
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, submitButton, initialText);
    });
};



export {submitCardForm, submitEditProfile, editAvatarForm, request};