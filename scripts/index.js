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

//функции открытия и закрытия
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//открытие и закрытие попапа редактирования с исходными или внесенными данными
popupEditOpen.addEventListener('click', function () {
  nameInput.value = username.textContent;
  aboutNameInput.value = description.textContent;
  openPopup(popupEdit);
})
popupEditClose.addEventListener('click', function () {
  closePopup(popupEdit);
})
function submitEditProfile(evt) {
  evt.preventDefault(); 
  nameInput.value;
  aboutNameInput.value;
  username.textContent = nameInput.value;
  description.textContent = aboutNameInput.value;
  closePopup(popupEdit);
}
formEditProfile.addEventListener('submit', submitEditProfile);
popupEditSave.addEventListener('click', function () {
closePopup(popupEdit);
})




// реализация добавления, удаления, увеличения карточки
function createElement(link, name) {
  const elementTemplate = document.querySelector('#element-template').content; 
  const elementsClone = elementTemplate.querySelector('.element').cloneNode(true); 
  const elementsCloneDelete = elementsClone.querySelector('.element__delete');  

  elementsClone.querySelector('.element__mask-group').src = link;
  elementsClone.querySelector('.element__mask-group').alt = name;
  elementsClone.querySelector('.element__name-group').textContent = name;
  elementsClone.querySelector('.element__group').addEventListener('click', function (evt) { 
    evt.target.classList.toggle('element__group_active');
  });
  elementsClone.querySelector('.element__mask-group').addEventListener('click', function (evt) {
    viewImage(link, name)
    evt.target.classList.toggle('.element__mask-group');
  });
  elementsCloneDelete.addEventListener('click', (e) => {
    e.stopPropagation();
    elementsClone.remove();
  });
  return elementsClone;
};

//методом перебора добавляем в разметку стартовые карточки
initialCards.forEach(item => {
  cardsList.append(createElement(item.link, item.name));
})

//открытие и закрытие попапа добавления карточки
popupAddOpen.addEventListener('click', () => {
  openPopup(popupAdd);
});
popupAddClose.addEventListener('click', () => {
  closePopup(popupAdd);
});

//добавление карточки
function submitCardForm(evt) {
  evt.preventDefault(); 
  cardsList.prepend(createElement(linkInput.value, titleInput.value));
}
formCardAdd.addEventListener('submit', submitCardForm);
popupAddCreate.addEventListener('click', () => {
  closePopup(popupAdd);
});

// развертывание карточки
function viewImage(link, name) {
  openPopup(popupImg);
  imgInsert.src = link;
  imgInsert.alt = name;
  nameInsert.textContent = name;
}
popupImgClose.addEventListener('click', function () {
  closePopup(popupImg);
});