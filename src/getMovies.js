export const getMovies = async (baseUrl) => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

/*export const getShows = async (url) => {
  fetch(url)
  .then((res) => res.json())
  
};*/

export function getShows(url) {
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    for(var i = 0; i < 20; i += 1) {
      movieID.push(data[i]);
    }
    console.log(movieID);
  })
}