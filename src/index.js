import './style.css';
import logo from './logoImage.jpg';
import { getShows } from './getMovies.js';

const baseUrl = 'https://api.tvmaze.com';
const frontMovies = document.querySelector('.Shows');
const frontShows = [];
// Adding the logo image
const element = document.querySelector('.logoContainer');
const mylogo = new Image();
mylogo.className = 'logo';
mylogo.src = logo;

element.append(mylogo);

// Pop SHow

const popShow = (arr) => {
  frontMovies.innerHTML = '';
  arr.forEach((movie) => {
    const eachMovie = `<div class=movie id=${movie.id}>
           <h1 class="movie-title">${movie.name}</h1>
           <img class="movie-image" src=${movie.image.medium}>
           
           <div class= "userInterAct">
             <button class=commentBtn btn-${movie.id}>comment</button>
             <i class="fas fa-heart"></i>
          </div>
        </div>`;

    frontMovies.insertAdjacentHTML('beforeend', eachMovie);
  });
};

// calling shows
const callShow =  () => {
    const show =  getShows(`${baseUrl}/shows`);
    console.log(show);
    show.splice(19,250);
    frontShows=show;
    popShow(frontShows);
  }
callShow();
console.log(frontShows.length)