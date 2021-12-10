
'use strict';
document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = document.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if(newFilm) {

            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }
            if(favorite) {
                console.log("добовляем любимый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
    
        }
        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
   

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    

    const sortArr = (arr) => {
        arr.sort();
    };

   

   
    function createMovieList(films, parent) {

        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class = "promo__interactive-item">${i + 1} ${film}
                    <div class = "delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn,i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });


    }
    

    deleteAdv(adv);
    makeChanges();
    
    createMovieList(movieDB.movies, movieList);
});



/*const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};*/

/*
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

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
});*/







    


