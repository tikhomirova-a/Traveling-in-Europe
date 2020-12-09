'use strict';

(function () {
  const formContainer = document.querySelector('.page-main__feedback-form');
  const form = formContainer.querySelector('.feedback-form__form');
  const modalStatus = document.querySelector('.modal-status')
  const statusClose = modalStatus.querySelector('.modal-status__close');
  const inputTel = form.querySelector('#mobile-input');
  const inputEmail = form.querySelector('#email-input');

  const showFormStatus = () => {
    modalStatus.classList.add('modal-status--show');
    statusClose.addEventListener('click', onStatusClose);
  }

  const hideFormStatus = () => {
    modalStatus.classList.remove('modal-status--show');
    statusClose.removeEventListener('click', onStatusClose);
  }

  const onFormSubmit = (evt) => {
    window.modal.saveToLocalStorage(inputTel, 'tel', inputEmail, 'email');
    window.modal.resetForm();
    showFormStatus();
    evt.preventDefault();
  };

  const onStatusClose = (evt) => {
    evt.preventDefault();
    hideFormStatus();
  }

  form.addEventListener('submit', onFormSubmit);
})();
