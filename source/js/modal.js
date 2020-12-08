'use strict';

(function () {
  const modal = document.querySelector('.modal');
  const modalClose = modal.querySelector('.modal__close');
  const inputTel = modal.querySelector('#mobile-input-modal');

  const showModal = () => {
    modal.classList.add('modal--show');
    inputTel.focus();
    modalClose.addEventListener('click', onModalCloseClick);
    document.addEventListener('keydown', onModalEscape);

    const onFormSubmit = (evt) => {
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
    modal.classList.remove('modal--show');
    modal.classList.remove('modal--status');
    modalClose.removeEventListener('click', onModalCloseClick);
    document.removeEventListener('keydown', onModalEscape);
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

})();
