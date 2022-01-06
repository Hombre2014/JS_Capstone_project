/* eslint-disable no-use-before-define */

import { postLike, displayLikes } from './getLikes.js';

const frontMovies = document.querySelector('.Shows');
const showsList = [];
// let myArr = [];
// Generate like array

export default function getShows() {
  fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 16; i += 1) {
        showsList.push(data[i]);
      }
      popShow(showsList);
    });
}

const popShow = async (arr) => {
  frontMovies.innerHTML = '';
  let likeArray = await displayLikes();
  if (likeArray === undefined) {
    likeArray = [];
  }
  console.log("This is like Array: ", likeArray);
  arr.forEach((movie, index) => {
    let eachMovie = `<div class=movie id=${movie.id}>
      <h1 class="movie-title">${movie.name}</h1>
      <img class="movie-image" src=${movie.image.medium}>
      <div class= "userInterAct">
        <button class="commentBtn btn-${movie.id}">comment</button>
        
        <div class='likesCont'>
          <i class="fas fa-heart" data-id=${movie.id}></i>`;
    if (likeArray[index] === undefined) {
      eachMovie += `<p class="likes"> 0 Likes</p>
            </div>
          </div>
        </div>`;
    } else {
      eachMovie += `<p class="likes">${likeArray[index].likes} Likes</p>
              </div>
          </div>
        </div>`;
    }
    frontMovies.insertAdjacentHTML('beforeend', eachMovie);
    // document.querySelectorAll('.fas').forEach((Heartbtn, index) => {
    //   index += 1;
    //   // console.log("Index for like buttons: ", index);
    //   Heartbtn.addEventListener('click', () => {
    //     const heartID = index;
    //     console.log("The ID we are posting to API: ", index);
    //     console.log(`'${heartID}'`);
    //     postLike(`'${heartID}'`);

    // likeContainer[index].innerHTML = `${likeArray[index].likes + 1} Likes`;
    // likeArray[index].likes += 1;
    // });
    // });
  });
  const likeIcons = document.querySelectorAll('.fa-heart');
  likeIcons.forEach((like) => {
    const movieID = like.dataset.id;
    like.addEventListener('click', () => {
      postLike(movieID);
    });
  });
};

const likeContainer = document.querySelectorAll('.likes');