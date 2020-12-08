'use strict';

(function () {
  const nav = document.querySelector('.main-nav');
  const toggle = nav.querySelector('.main-nav__button');
  const buttons = document.querySelectorAll('.button--tour');

  const startScript = () => {
    nav.classList.remove('main-nav--nojs');
  }

  startScript();

  window.main = {
    nav,
    toggle,
    buttons
  }
})();
