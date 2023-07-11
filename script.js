'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');
const btnsOpenModals = document.querySelectorAll('.show-modal');
console.log(btnsOpenModals);

for (let i = 0; i < btnsOpenModals.length; i++)
  console.log(btnsOpenModals[i].textContent);
