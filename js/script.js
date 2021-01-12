//  Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
 let adv = document.querySelectorAll('.promo__adv img');
// for (let i = 0; i < adv.length; i++) {
//     adv[i].remove();
// }
adv.forEach(element => {
    element.remove();
});

//2) Изменить жанр фильма, поменять "комедия" на "драма"
let promoGenre = document.querySelector('.promo__genre');
//promoGenre.innerHTML = 'Драма';
promoGenre.textContent = 'Драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
let promoBg = document.querySelector('.promo__bg');
//promoBg.style.background = 'url(img/bg.jpg)';
promoBg.style.backgroundImage = 'url("img/bg.jpg")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

//5) Добавить нумерацию выведенных фильмов 

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let arrMovi = movieDB.movies.sort();
const filmList = document.querySelector('.promo__interactive-list');
filmList.innerHTML = "";
arrMovi.forEach((book, i) => {
    filmList.innerHTML += `<li class="promo__interactive-item">
                                ${i+1}.  ${book}
                                <div class="delete"></div>
                            </li>`;
});