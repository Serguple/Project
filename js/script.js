/* Задание на урок:

1) Первую часть задания повторить по ур оку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных

*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films have you watched?", '');

    while(numberOfFilms == "" || isNaN(numberOfFilms) || numberOfFilms == null ) {
        numberOfFilms = +prompt("How many films have you watched?", '');
    }
    return numberOfFilms;
}

function rememberMyFilms() {
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
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB)
    }
}

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        let answer = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
        personalMovieDB.genres[i] = answer;
    }
}

let personalMovieDB = {
    count: start(),
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();

detectPersonalLevel();

writeYourGenres();

showMyDB();

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);