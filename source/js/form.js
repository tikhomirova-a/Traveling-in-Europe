'use strict';

(function () {
  const formContainer = document.querySelector(`.page-main__feedback-form`);
  const form = formContainer.querySelector(`.feedback-form__form`);
  const modalStatus = document.querySelector(`.modal-status`)
  const statusClose = modalStatus.querySelector(`.modal-status__close`);
  const inputTel = form.querySelector(`#mobile-input`);
  const inputEmail = form.querySelector(`#email-input`);

  const onInputTelInput = (input) => {
    const re = /^[^a-zA-Z]\d*$/g;
    if (input.value.length !== 0 && !re.test(input.value)) {
      input.setCustomValidity(`Номер телефона должен содержать только цифры.`);
    } else {
      input.setCustomValidity(``);
    }
    input.reportValidity();
  };

  inputTel.addEventListener(`input`, onInputTelInput.bind(null, inputTel));

  const showFormSuccess = () => {
    modalStatus.classList.add(`modal-status--show`);
    modalStatus.classList.add(`modal-status--success`)
    window.main.body.classList.add(`page-body--modal-open`);
    statusClose.addEventListener(`click`, onStatusClose);
  };

  const showFormError = () => {
    modalStatus.classList.add(`modal-status--show`);
    modalStatus.classList.add(`modal-status--error`)
    window.main.body.classList.add(`page-body--modal-open`);
    statusClose.addEventListener(`click`, onStatusClose);
  };

  const hideFormStatus = () => {
    modalStatus.classList.remove(`modal-status--show`);
    modalStatus.classList.contains(`modal-status--success`) ?
      modalStatus.classList.remove(`modal-status--success`) :
      modalStatus.classList.remove(`modal-status--error`);
    window.main.body.classList.remove(`page-body--modal-open`);
    statusClose.removeEventListener(`click`, onStatusClose);
  };

  const resetForm = (form) => {
    form.querySelectorAll(`input`).forEach((input) => {
      input.value = ``;
    })
  };

  const upload = (data, form) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.addEventListener(`load`, () => {
      if (xhr.status === 200) {
        showFormSuccess();
        resetForm(form);
        return;
      }
      showFormError();
    });

    xhr.addEventListener(`error`,() => {
      showFormError();
    });

    xhr.open(`POST`, `https://echo.htmlacademy.ru`);
    xhr.send(data);
  };

  const saveToLocalStorage = (input1, key1, input2, key2) => {
    localStorage.setItem(key1, input1.value);
    localStorage.setItem(key2, input2.value);
  }

  const onFormSubmit = (evt) => {
    if (!inputTel.validity.valid || !inputEmail.validity.valid) {
      evt.preventDefault();
    } else {
      saveToLocalStorage(inputTel, `tel`, inputEmail, `email`);
      upload(new FormData(form), form);
      evt.preventDefault();
    }
  };

  const onStatusClose = (evt) => {
    evt.preventDefault();
    hideFormStatus();
  };

  form.addEventListener(`submit`, onFormSubmit);

  window.form = {
    modalStatus,
    statusClose,
    onInputTelInput,
    showFormSuccess,
    showFormError,
    hideFormStatus,
    saveToLocalStorage,
    upload,
    resetForm,
    onFormSubmit
  }
})();
