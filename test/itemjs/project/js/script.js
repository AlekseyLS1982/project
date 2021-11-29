/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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

let adBlock = document.querySelectorAll('img');
let imgArr =[];
adBlock.forEach(function(i,item,arr){
    if(item>0){
        i.remove();
    }
});

let genreDrama = document.querySelector('.promo__genre');
genreDrama.textContent = 'драмма';

let imgBg = document.querySelector('.promo__bg');
imgBg.style.background = 'url("img/bg.jpg")';

let li = document.querySelectorAll('.promo__interactive-item');
li.forEach(function(i,){
    i.remove();
});

let ul = document.querySelector('.promo__interactive-list');
    ul.remove();

let newOl = document.createElement('ol');
    newOl.classList='promo__interactive-list';
    newOl.style.listStyleType = 'decimal';
let searchDiv = document.querySelector('.promo__interactive-title');
searchDiv.prepend(newOl);

let newLi = [];
movieDB['movies'].forEach(function( i,item,arr){
    newLi = document.createElement('li');
    newLi.classList = 'promo__interactive-item';
    newLi.style.display = 'list-item';
    newLi.textContent =  i;
    newOl.append(newLi);

});



