'use strict';

(function () {
  const modal = document.querySelector('.modal');
  const modalClose = modal.querySelector('.modal__close');
  const inputTel = modal.querySelector('#mobile-input-modal');
  const inputEmail = modal.querySelector('#email-input-modal');

  const showModal = () => {
    modal.classList.add('modal--show');
    inputTel.focus();
    modalClose.addEventListener('click', onModalCloseClick);
    document.addEventListener('keydown', onModalEscape);

    const onFormSubmit = (evt) => {
      saveToLocalStorage(inputTel, 'tel', inputEmail, 'email');
      showModalStatus();
      evt.preventDefault();
    };

    const form = modal.querySelector('.feedback-form__form');
    form.addEventListener('submit', onFormSubmit);
  }

  const showModalStatus = () => {
    modal.classList.add('modal--status');
  }

  const hideModal = () => {
    resetForm();
    modal.classList.remove('modal--show');
    modal.classList.remove('modal--status');
    modalClose.removeEventListener('click', onModalCloseClick);
    document.removeEventListener('keydown', onModalEscape);
  }

  const saveToLocalStorage = (input1, key1, input2, key2) => {
    localStorage.setItem(key1, input1.value);
    localStorage.setItem(key2, input2.value);
  }

  const resetForm = () => {
    document.querySelectorAll('input').forEach((input) => {
      input.value = '';
    })
  }

  const onModalShowClick = (evt) => {
    evt.preventDefault();
    showModal();
  }

  const onModalCloseClick = () => {
    hideModal();
  }

  const onModalEscape = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      hideModal();
    }
  }

  const setEventListeners = (elements) => {
    elements.forEach((elem) => {
      elem.addEventListener('click', onModalShowClick);
    })
  }

  setEventListeners(window.main.buttons);

  window.modal = {
    resetForm,
    saveToLocalStorage
  }
})();
