'use strict';

const btns = document.querySelectorAll('button');

console.log(btns[0].classList.item(1));
console.log(btns[0].classList.add('red'));
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));
console.log(btns[0].classList.add('red'));
btns[0].addEventListener('click', () =>{
  if(!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red');
  }
});

wrapper.addEventListener('click', (event) => {
  if(event.target && event.target.tagName == "BUTTON") {
    event.target && event.target.tagName ==
  }
});