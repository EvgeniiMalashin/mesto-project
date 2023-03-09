import { openPopup } from "./modal";
import { popupImg, imgInsert, nameInsert, elementTemplate } from "./constants";
import { deleteLikeCard, putLikeCard, deleteCard } from './api.js';

// развертывание карточки
function viewImage(card) {
  openPopup(popupImg);
  imgInsert.src = card.link;
  imgInsert.alt = card.name;
  nameInsert.textContent = card.name;
};

//переписываю функцию c данными
function createElement(card, user) { 
  const elementsClone = elementTemplate.querySelector('.element').cloneNode(true);
  const elementsCloneDeleteButton = elementsClone.querySelector('.element__delete');
  const like = elementsClone.querySelector('.element__group');
  const likeAmout = elementsClone.querySelector('.element__amount-likes');
  elementsClone.querySelector('.element__mask-group').src = card.link;
  elementsClone.querySelector('.element__mask-group').alt = card.name;
  elementsClone.querySelector('.element__name-group').textContent = card.name;
  likeAmout.textContent = card.likes.length; 
  
  card.likes.forEach(cardLike => {
    if (cardLike._id === user.id) { 
      like.classList.add('element__group_active');
    } 
  })

  like.addEventListener('click', function (evt) { 
    if (!evt.target.classList.contains('element__group_active')) {
      putLikeCard(card._id)
        .then((data) => {
          evt.target.classList.add('element__group_active')
          likeAmout.textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err); 
        });
    } else {
      deleteLikeCard(card._id)
        .then((data) => {
          evt.target.classList.remove('element__group_active')
          likeAmout.textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err); 
        });
    }
  })
  
  elementsClone.querySelector('.element__mask-group').addEventListener('click', function (evt) {
    viewImage(card); 
    evt.target.classList.toggle('.element__mask-group');
  });

  if (user.id !== card.owner._id) {   
    elementsCloneDeleteButton.classList.add('element__delete_nonactive');
  }

  elementsCloneDeleteButton.addEventListener('click', (e) => {
    deleteCard(card._id)
      .then(() => {
        e.stopPropagation();
        elementsClone.remove();
      })
      .catch((err) => {
        console.log(err); 
      });
  });
  return elementsClone;
};

export {createElement};