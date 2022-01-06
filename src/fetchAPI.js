export const movieID = [];

export function getMovies() {
  fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 20; i += 1) {
        movieID.push(data[i]);
      }
      // console.log(movieID);
    });
}