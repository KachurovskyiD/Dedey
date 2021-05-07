'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // JS - функция определения поддержки WebP

function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

function getCounter(parentSelector, arrowDown, arrowUp, input) {
  const arrow_Down = document.querySelector(`${parentSelector} ${arrowDown}`);
  const arrow_Up = document.querySelector(`${parentSelector} ${arrowUp}`);
  const counterInput = document.querySelector(`${parentSelector} ${input}`);

  arrow_Down.addEventListener('click', valueMinus);
  arrow_Up.addEventListener('click', valuePlus);

  function valueMinus() {
    if (counterInput.value > 0) {
      counterInput.value--;
    }
  }

  function valuePlus() {
    counterInput.value++;
  }
}

getCounter(".numbers", ".reservation__count-arrow--down", ".reservation__count-arrow--up", ".reservation__count-value");
getCounter(".adult", ".reservation__count-arrow--down", ".reservation__count-arrow--up", ".reservation__count-value");
getCounter(".children", ".reservation__count-arrow--down", ".reservation__count-arrow--up", ".reservation__count-value");;
});




