
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

/*
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.*/

const ul = document.querySelector('.promo__interactive-list');
let input = document.querySelector('.adding__input');
const button = document.querySelector('button');




button.addEventListener('click',function(event){
    event.preventDefault();
    const newLi = document.createElement('li');
    const newDiv = document.createElement('div');

    newLi.classList = 'promo__interactive-item';
    if(input.value.length < 21) {
        newLi.textContent = input.value;
    } else if (input.value.length >= 21) {
        let i = input.value;
        let x =i.slice(0,21);
        x = x+'...';
        newLi.textContent = x;
    }
    
    newDiv.classList = 'delete';

    newLi.append(newDiv);
    ul.append(newLi);

    input.value = '';


    let trueInput = document.querySelectorAll('input');

    trueInput.forEach(function(item,i){
        if(i==2) {
            trueInput = item;
        } 
    });
    if(trueInput.value == 'on'){
        console.log('добовляем любимый фильм');
    } else if(trueInput.values != 'on'){

    }

    
    
});

ul.addEventListener('mouseover',function(){
    const divDelete = document.querySelectorAll('.delete');
    divDelete.forEach(function(item){
        item.addEventListener('click',function(){
            let z = item.parentElement;
            z.remove();
        });
    });
});







    


