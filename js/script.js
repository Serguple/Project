/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many films have you watched?", '');
    
        while(personalMovieDB.count == "" || isNaN(personalMovieDB.count) || personalMovieDB.count == null ) {
            personalMovieDB.count = +prompt("How many films have you watched?", '');
        }
    },
    rememberMyFilms: function() {
        let l = 0;
        do {
            const watchedFilmName = prompt("One of the watched movies?", ''),
            watchedFilmRating = +prompt("This film's rating?", '');
        
            if (watchedFilmName == "" || watchedFilmName.length > 50) {
                l = 0;
                continue;
            }
            personalMovieDB.movies[watchedFilmName] = watchedFilmRating;
    
            l++;
        } while (l < 2)
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 1; i++) {
            // let answer = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            // if (answer === null || answer === "") {
            //     i--;
            //     continue;
            // }
            // personalMovieDB.genres[i] = answer;


            let answer = prompt("Your ganers in order?", "").toLowerCase();

            if (answer === null || answer === "") {
                i--;
                console.log("Error");
            } else {
                personalMovieDB.genres = answer.split(', ');
                personalMovieDB.genres.sort()
            }
                
        };
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        })
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};