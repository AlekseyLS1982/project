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

const promoAdv = document.querySelector('.promo__adv');
let promoTitle = promoAdv.querySelector('.promo__adv-title');
promoTitle.textContent = "Последние фильмы";
const promoImg = promoAdv.querySelectorAll('img');
promoImg.forEach((item) => {
  item.remove();
});

let newTable = document.createElement('table');
let newTr = document.createElement('tr');
newTr.classList = "test";
newTable.classList = "promo__interactive-list";
newTable.style.marginLeft = "10px";
promoAdv.append(newTable);
newTable.append(newTr);



function createTable () {
  
  movieDB.movies.forEach( function (item) {
   let newTd = document.createElement('td');
   newTd.classList = "promo__interactive-item";
   newTd.style.color = 'white';
   newTd.textContent = item;
   newTr.append(newTd);

  });
}

createTable();

let promoBg = document.querySelector('.promo__bg');
let promoGenre = promoBg.querySelector('.promo__genre');

promoGenre.textContent = 'Драма';
promoBg.style.backgroundImage = 'url("img/bg.jpg")';


let promoInteractive = document.querySelector('.promo__interactive');
let promoNewUl = promoInteractive.querySelector('ul');

function removeLi () {
  let li = promoInteractive.querySelectorAll('li');
  li.forEach((item) => {
    item.remove();
  });
}
removeLi ();



let newList = movieDB.movies.sort();
let newUl = document.querySelector('.promo__interactive-list');

function createNewLi () {
  newList.forEach(function(item,i){
    newUl.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${item}
        <div class="delete"></div>
    </li>
    `;
  });
}
createNewLi();

const add = document.querySelector('.add');

let button = add.querySelector('button');

function newLi () {
  button.addEventListener('click',function(e){
    e.preventDefault();
    let addingInput = add.querySelector('.adding__input');
    
    if(addingInput.value.length >= 21){
      movieDB.movies.push(addingInput.value.slice(0,21)+'...');
      removeLi ();
      createNewLi();
    } else if (addingInput.value.length < 21) {
      movieDB.movies.push(addingInput.value);
      removeLi ();
      createNewLi();
    }
    addingInput.value = "";
    let deleteDiv = newUl.querySelectorAll('.delete');
    deleteDiv.forEach(function(item){
      item.addEventListener('click',function(){
        item.parentElement.remove();
      });
    });
    let checkbox = add.querySelector('[type="checkbox"]');
    if(checkbox.checked == true) {
      console.log("Добовляем любимый фильм");
    }

  });
}
newLi();





