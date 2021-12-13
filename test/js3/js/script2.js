'use strict';

const movieDB = {
  movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
  ]
};


const promoAdv = document.querySelector('.promo__adv').querySelectorAll('img');
promoAdv.forEach((e) =>{
  e.remove();
});

const promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = 'Драма';

const promoBg = document.querySelector('.promo__bg');
promoBg.style.background = "url(img/bg.jpg)";




function newItem () {
  const promoList = document.querySelector('.promo__interactive-list');
  const promoLi = promoList.querySelectorAll('.promo__interactive-item');
    promoLi.forEach((e) => {
      e.remove();
    });
    movieDB.movies.sort().forEach(function(e,i) {
    promoList.innerHTML += 
    `
    <li class="promo__interactive-item">${i+1} ${e}
      <div class="delete"></div>
    </li>
    `;
  });
}



const add = document.querySelector('.add');
const button = add.querySelector('button');
const input = add.querySelector('.adding__input');


button.addEventListener('click',function(e){
  e.preventDefault();
  movieDB.movies.push(input.value);
  console.log(movieDB);
  newItem();
});
