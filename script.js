
  let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// // console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// personalMovieDB.movies.nameFilm1 = prompt('Один из последних просмотренных фильмов?', '');
// personalMovieDB.movies.ballFilm1 = prompt('На сколько оцените его?', '');
// personalMovieDB.movies.nameFilm2 = prompt('Один из последних просмотренных фильмов?', '');
// personalMovieDB.movies.ballFilm2 = prompt('На сколько оцените его?', '');

// let a = ('Один из последних просмотренных фильмов?', ''),
//     b = ('На сколько оцените его?', '');
    // c = prompt('Один из последних просмотренных фильмов?', ''),
    // d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

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


 console.log(personalMovieDB.movies);

 if (numberOfFilms < 10) {
    alert("Просмотрено довольно мало фильмов"); 
 }else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert("Вы классический зритель");
 }else if (numberOfFilms >= 30) {
    alert("Вы киноман");
 }else{
    alert("Произошла ошибка"); 
 }
 

// const arr = {
//    0 : 'Один из последних просмотренных фильмов?',
//    1 : 'На сколько оцените его?'
// };

// // prompt(arr[0]);
// // console.log(arr[0]);

// let i = 0;
// let j= 0;
// while (i < personalMovieDB.count){
    
//     personalMovieDB.movies[prompt(arr[j])] = prompt(arr[++j]);
//     i++;
//     j=0;
// }

// console.log(personalMovieDB.movies);