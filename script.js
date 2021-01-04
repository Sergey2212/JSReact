
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*
personalMovieDB.movies.nameFilm1 = prompt('Один из последних просмотренных фильмов?', '');
personalMovieDB.movies.ballFilm1 = prompt('На сколько оцените его?', '');
personalMovieDB.movies.nameFilm2 = prompt('Один из последних просмотренных фильмов?', '');
personalMovieDB.movies.ballFilm2 = prompt('На сколько оцените его?', '');
*/

let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('Один из последних просмотренных фильмов?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('Один из последних просмотренных фильмов?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;  

console.log(personalMovieDB.movies);

