/* eslint-disable no-use-before-define */

import { postLike, getLikes } from './getLikes.js';

const frontMovies = document.querySelector('.Shows');
const showsList = [];
let myArr = [];
// Generate like array

export default function getShows() {
  fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 16; i += 1) {
        showsList.push(data[i]);
      }
      genArr(showsList);
    });
}

const popShow = (arr, likeArray) => {
  frontMovies.innerHTML = '';
  console.log(likeArray);
  arr.forEach((movie, index) => {
    
    let eachMovie = `<div class=movie id=${movie.id}>
           <h1 class="movie-title">${movie.name}</h1>
           <img class="movie-image" src=${movie.image.medium}>
           <div class= "userInterAct">
             <button class="commentBtn btn-${movie.id}">comment</button>
             
             <div class='likesCont'>
               <i class="fas fa-heart" data-id=${movie.id}></i>`;

              if(likeArray[index]===undefined){
                 eachMovie+=`<p class="likes"> 0 Likes</p>
                 </div>
             </div>
           </div>`;
          }
          else {
            eachMovie+=`<p class="likes">${likeArray[index].likes} Likes</p>
                 </div>
             </div>
           </div>`;
          }
               
    frontMovies.insertAdjacentHTML('beforeend', eachMovie);
 
    document.querySelectorAll('.fas').forEach((Heartbtn) => {
      Heartbtn.addEventListener('click', (e) => {
        console.log(e.target);
        postLike(e.target.dataset.id);
        getShows();
        e.preventDefault();
      });
    });
  });
};

const genArr = async (listOfShows) => {
  myArr = await getLikes();
  console.log(myArr)
  popShow(listOfShows, myArr);
};
