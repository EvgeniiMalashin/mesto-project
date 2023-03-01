import { openPopup } from "./modal";
import { popupImg, imgInsert, nameInsert, elementTemplate } from "./constants";

// реализация добавления, удаления, увеличения карточки
function createElement(link, name) {
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
  });
  elementsCloneDelete.addEventListener('click', (e) => {
    e.stopPropagation();
    elementsClone.remove();
  });
  return elementsClone;
};

// развертывание карточки
function viewImage(link, name) {
  openPopup(popupImg);
  imgInsert.src = link;
  imgInsert.alt = name;
  nameInsert.textContent = name;
};

export {createElement};