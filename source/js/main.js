'use strict';

(function () {
  const body = document.querySelector(`.page-body`);
  const nav = body.querySelector(`.main-nav`);
  const toggle = nav.querySelector(`.main-nav__button`);
  const buttons = document.querySelectorAll(`.button--tour`);

  const startScript = () => {
    nav.classList.remove(`main-nav--nojs`);
    nav.classList.remove(`main-nav--open`);
  };

  startScript();

  window.main = {
    body,
    nav,
    toggle,
    buttons
  }
})();
