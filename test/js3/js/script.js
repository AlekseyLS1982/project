
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






const input = document.querySelector('.adding__input');
const ul = document.querySelector('.promo__interactive-list');
const button = document.querySelector('.add').lastElementChild;
const liDelete = document.querySelector('.delete');
let newLi = document.createElement('li');



function addElem(){  
    newLi.classList = 'promo__interactive-item';
    newLi.append(liDelete);
    ul.append(newLi);
    input.value = '';
}


button.addEventListener('click', function(event){
    event.preventDefault();
    console.log(input.value.length);
    if(input.value !== "" && input.length <= 21) {
        newLi.textContent = input.value;
        addElem();
    } else if (input.value !=="" && input.value.length > 21) {
        newLi.textContent = input.value.slice(0,21) +'...';
        addElem();
    } else {
        console.log('введите фильм');
    }
    
});
    


