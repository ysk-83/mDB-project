
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let movieDB = {
        movies: [
            "Игрок",
            "Лига справедливости",
            "Зов Ада",
            "Я,ты и он...",
            "Аура",
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img ');
    const promoGenre = document.querySelector('.promo__genre');
    const promoBg = document.querySelector('.promo__bg');
    const list = document.querySelector('.promo__interactive-list');
    const formAdd = document.querySelector('.add');
    const input = document.querySelector('.adding__input');
    const buttonAdd = formAdd.lastElementChild;
    const checkBox = formAdd.querySelector('input[type = checkbox]');
    // const deleteFilm = document.querySelectorAll('.delete');

    const removeADV = (arr) => {
        arr.forEach(item => item.remove());
    };
    removeADV(adv);


    const makeChanges = () => {
        promoGenre.textContent = 'Драма';
        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    };
    makeChanges();


    const addNewFilm = () => {
        formAdd.addEventListener('submit', function (e) {
            e.preventDefault();
            if (input.value) {
                movieDB.movies.push(input.value);
                createMovieList();
                if (checkBox.checked) {
                    console.log('Добавляем любимый фильм');
                }
            }
            e.target.reset();
        });

    };
    addNewFilm();

    function removeFilm() {
        const deleteBtn = document.querySelectorAll('.delete');
        deleteBtn.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList();
            });
        });

    }
    removeFilm();

    function createMovieList() {
        list.innerHTML = '';
        movieDB.movies.sort();
        movieDB.movies.forEach((film, i) => {
            if (movieDB.movies[i].length > 21) {
                list.innerHTML +=
                    `<li class="promo__interactive-item">${i + 1}. ${film.slice(0, 21)}...
                    <div class="delete"></div>
                </li>`;
            } else {
                list.innerHTML +=
                    `<li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>`;
            }
        });
        removeFilm();

    }
    createMovieList();

});
















