const frontMovies = document.querySelector('.Shows');

const showsList = [];

const popShow = (arr) => {
  frontMovies.innerHTML = '';
  arr.forEach((movie) => {
    const eachMovie = `<div class=movie id=${movie.id}>
           <h1 class="movie-title">${movie.name}</h1>
           <img class="movie-image" src=${movie.image.medium}>
           <div class= "userInterAct">
             <button class="commentBtn btn-${movie.id}">comment</button>
             <i class="fas fa-heart" data-id="${movie.id}"></i>
          </div>
        </div>`;
    frontMovies.insertAdjacentHTML('beforeend', eachMovie);
  });
};

export default function getShows() {
  fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 20; i += 1) {
        showsList.push(data[i]);
      }
      popShow(showsList);
    });
}