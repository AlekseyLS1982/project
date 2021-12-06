const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');


btns.forEach(i => {
  i.addEventListener('click', () =>{
    console.log(i);
  });
});