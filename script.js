 let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm() {
    let i = 0;
    while (i < personalMovieDB.count) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        i++;
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilm();

function detectPersinalLevel() {
    if (numberOfFilms < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert("Вы классический зритель");
    } else if (numberOfFilms >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersinalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB.movies);
    }
}

showMyDB(personalMovieDB.privat);

// Мой вариант
// function writeYourGenres() {
//     let num = 1, i = 0;
//     while (num <= 3) {
//         let otvet = prompt('Ваш любимый жанр под номером ' + num, '');
//         personalMovieDB.genres[i] = otvet;
//         num++;
//         i++;
//     }   
// }

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
        
    }  
}

writeYourGenres();

console.log(personalMovieDB.genres);
