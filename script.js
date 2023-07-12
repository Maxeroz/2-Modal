'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');
const btnsOpenModals = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModals.length; i++)
  btnsOpenModals[i].addEventListener('click', openModal);

// btnClosedModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

btnClosedModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
