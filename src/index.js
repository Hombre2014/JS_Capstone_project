import './style.css';
import logo from './logoImage.jpg';
import { getMovies, getShows} from './getBooks.js';

const baseUrl ="https://api.tvmaze.com";
const frontMovies = document.querySelector('.Shows')
let frontShows = [];
//Adding the logo image
const element = document.querySelector('.logoContainer');
const mylogo = new Image();
mylogo.className = 'logo';
mylogo.src = logo;

element.append(mylogo);

//calling shows

const callShow = async () =>{
  for(let i=1; i<9; i++){
     let show = await getShows(`${baseUrl}/shows/${i}`);
     frontShows.push(show);
  } 
  //console.log(frontShows.length)
  popShow(frontShows)
}


const popShow = (arr) => {
  frontMovies.innerHTML='';
  //console.log(arr.length);
  arr.forEach((movie) => {
      const eachMovie = 
      `<div class=movie>
         <h1 class="movie-title">${movie.name}</h1>
         <img class="movie-image" src=${movie.image.medium}>
      </div>`;
    
    frontMovies.insertAdjacentHTML('beforeend',eachMovie);
  });
  //console.log(frontShows[0].name);
  
}
callShow();