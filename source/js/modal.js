'use strict';

(function () {
  const modal = window.main.body.querySelector(`.modal`);
  const modalClose = modal.querySelector(`.modal__close`);
  const form = modal.querySelector(`.feedback-form__form`);
  const inputTel = form.querySelector(`#mobile-input-modal`);
  const inputEmail = form.querySelector(`#email-input-modal`);

  const showModal = () => {
    modal.classList.add(`modal--show`);
    window.main.body.classList.add(`page-body--modal-open`);
    inputTel.focus();
    modalClose.addEventListener(`click`, onModalCloseClick);
    document.addEventListener(`keydown`, onModalEscape);
    inputTel.addEventListener(`input`, window.form.onInputTelInput.bind(null, inputTel));

    const onFormSubmit = (evt) => {
      if (!inputTel.validity.valid || !inputEmail.validity.valid) {
        evt.preventDefault();
      } else {
        window.form.saveToLocalStorage(inputTel, `tel`, inputEmail, `email`);
        window.form.upload(new FormData(form), form);
        window.form.statusClose.addEventListener(`click`, onStatusCloseClick);

        evt.preventDefault();
      }
    };

    form.addEventListener(`submit`, onFormSubmit);
  };

  const hideModal = () => {
    window.form.resetForm(form);
    modal.classList.remove(`modal--show`);
    window.main.body.classList.remove(`page-body--modal-open`);
    modalClose.removeEventListener(`click`, onModalCloseClick);
    document.removeEventListener(`keydown`, onModalEscape);
  };

  const onModalShowClick = (evt) => {
    evt.preventDefault();
    showModal();
  };

  const onModalCloseClick = (evt) => {
    evt.preventDefault();
    hideModal();
  };

  const onModalEscape = (evt) => {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      hideModal();
    }
  };

  const setEventListeners = (elements) => {
    elements.forEach((elem) => {
      elem.addEventListener(`click`, onModalShowClick);
    })
  };

  setEventListeners(window.main.buttons);

  const onStatusCloseClick = (evt) => {
    evt.preventDefault();
    window.form.hideFormStatus();
    hideModal();
  }
})();
