import { username, description, linkInput, titleInput, popupAdd, popupEdit, cardsList, nameInput, aboutNameInput } from "./constants";
import { closePopup } from "./modal";
import { createElement } from "./card";
function submitEditProfile(evt) {
    evt.preventDefault(); 
    username.textContent = nameInput.value;
    description.textContent = aboutNameInput.value;
    closePopup(popupEdit);
  }

function submitCardForm(evt) {
    evt.preventDefault(); 
    cardsList.prepend(createElement(linkInput.value, titleInput.value));
    closePopup(popupAdd);
    evt.target.reset();
  }

export {submitCardForm, submitEditProfile}