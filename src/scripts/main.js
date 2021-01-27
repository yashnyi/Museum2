'use strict';

// Lang selector:
const selectBlock = document.querySelector('.select');
const currentLang = document.querySelector('.select__lang');
const listLang = document.querySelector('.select__lang-list');
const iconLang = document.querySelector('.select__icon');

selectBlock.addEventListener('click', function() {
  currentLang.classList.toggle('select__lang--active');
  iconLang.classList.toggle('select__icon--active');
  listLang.classList.toggle('select__lang-list--active');
  selectBlock.classList.toggle('select--active');
});

// Change lang:
listLang.addEventListener('click', function(e) {
  if (e.target.classList.contains('select--ua')) {
    currentLang.textContent = 'UA';
  } else if (e.target.classList.contains('select--en')) {
    currentLang.textContent = 'EN';
  }
});

// Menu toggle:
document.querySelector('.sandwich').addEventListener('click', function(e) {
  const menu = document.querySelector('.menu');
  const sandwich = document.querySelector('.sandwich__button');

  menu.classList.toggle('menu--active');
  sandwich.classList.toggle('sandwich__button--active');
});
