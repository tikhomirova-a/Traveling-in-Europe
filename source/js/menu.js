'use strict';

(function () {
  const toggleClass = (elem, classTitle) => {
    elem.classList.toggle(classTitle);
  };

  const onToggleClick = () => {
    toggleClass(window.main.nav, `main-nav--open`);
    window.main.body.classList.toggle(`page-body--modal-open`);
  };

  window.main.toggle.addEventListener(`click`, onToggleClick);
})();
