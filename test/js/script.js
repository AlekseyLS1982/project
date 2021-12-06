"use sctrict";


/*
const a = prompt('Один из последних просмотренных фильмов?', ""),
      b = prompt('На сколько оцените его?', ""),
      c = prompt('Сколько фильмов вы уже посмотрели?', ""),
      d = prompt('На сколько оцените его?', "");

const personalMovieDB =
 {
   count  : 0,
   movies : {},
   actors : {},
   genres : {},
   privat : false,
   start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");

    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
   },
   rememberMyFilms: function () {
    for(let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ""),
            b = prompt('На сколько оцените его?', "");
    
      if (a != null && b !=null && a != ' '&& b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      } 
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10 ) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log ('произошла ошибка');
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log (personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genre === '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
      
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимы жанр ${i + 1} по порядку, начиная с 1) - это ${item}`);
    });
  }

 };





function showFirstMessage(text) {
  console.log(text);
  let num = 20;
}

let genres = [];


function first () {
  setTimeout(function() {
    console.log(1);
  }, 500);
}

function second () {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}



learnJS('JavaScript', function(){
  console.log('я прошел этот урок');
});

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function () {
    console.log('test');
  }
};


let counter = 0;
for (let key in options) {
  if (typeof(options[key] === 'object')) {
    for (let i in options[key]) {
      console.log(`свойство ${i} имеет значение ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`свойство ${key} имеет значение ${options[key]}`);
    counter ++;
  }
  
}
console.log(counter);



function copy (mainObj) {
  let objCopy = {};
  let key;
  for(key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};



const newNumbers = copy(numbers);

newNumbers.a = 10;


const add = {
  d: 17,
  e: 20
};

const clone = Object.assign({}, add);
clone.d = 20;


const oldArray = ['a','b','c'];
const newArray = oldArray.slice();

newArray[1] = 'askldfj';

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      interner = [...video, ...blogs, 'vk', 'facebook'];

const array = ['a', 'b'];

const newArray2 = [...array];

const q = {
  one: 1,
  two: 2
};*/
console.log(document.body.childNodes);







