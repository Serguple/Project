/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания


let numberOfFilms = +prompt("How many films have you watched?", '');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

let l = 0;

do {
    const watchedFilmName = prompt("One of the watched movies?", ''),
    watchedFilmRating = +prompt("This film's rating?", '');

    if (watchedFilmName === "" || watchedFilmName.length > 50) {
        l = 0;
        continue;
    }
    personalMovieDB.movies[watchedFilmName] = watchedFilmRating;
    
    l++;
} while (l < 2)

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);