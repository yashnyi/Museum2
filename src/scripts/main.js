'use strict';

// Menu toggle:

document.querySelector('.sandwich').addEventListener('click', function(e) {
  const menu = document.querySelector('.menu');
  const sandwich = document.querySelector('.sandwich__button');

  menu.classList.toggle('menu--active');
  sandwich.classList.toggle('sandwich__button--active');
});
