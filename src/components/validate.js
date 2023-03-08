
const showItemError = (form, formItem, errorMessage, settings) => {
  const formError = form.querySelector(`.${formItem.id}-error`);
  formItem.classList.add(settings.inputErrorClass);
  formError.textContent = errorMessage;
  formError.classList.add(settings.errorClass);
};

//удаление класса с ошибкой
const hideItemError = (form, formItem, settings) => {
  const formError = form.querySelector(`.${formItem.id}-error`);
  formItem.classList.remove(settings.inputErrorClass);
  formError.classList.remove(settings.errorClass);
  formError.textContent = ''; 
};
//проверяет валидность поля
const isValid = (form, formItem, settings) => {
  if (formItem.validity.patternMismatch) {
    formItem.setCustomValidity(formItem.dataset.errorMessage);
  } else {
    formItem.setCustomValidity("");
  }
  if (!formItem.validity.valid) {
    showItemError(form, formItem, formItem.validationMessage, settings);
  } else {
    hideItemError(form, formItem, settings);
  }
};

//принимает массив полей ввода и возвращает true, если поле не валидно
const hasInvalidInput = (inputList) => {
  return inputList.some((formItem) => {
    return !formItem.validity.valid;
  })
};

//функция активации кнопки сохранить/создать
function toggleButtonState(inputList, buttonElement, settings) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
};
//добавления слушателя всем полям внутри формы
const setEventListeners = (form, settings) => {
  const inputList = Array.from(form.querySelectorAll(settings.inputSelector));
  const buttonElement = form.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, settings);
  form.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, settings), 0 })
  });
  inputList.forEach((formItem) => {
    formItem.addEventListener('input', () => {
      isValid(form, formItem, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
});
};

//функция перебирает все формы
const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, settings);
  });
};

export {enableValidation}

