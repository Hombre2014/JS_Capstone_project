export let movieID = [];

// export function getBooks() {
//   fetch('https://openlibrary.org/search.json?q=javascript,first_publish_year:2021')
//     .then((res) => res.json())
//     .then((data) => {
//       const booksCount = data.docs.length;
//       for(var i = 0; i < booksCount; i += 1) {
//         booksISBNS.push(data.docs[i].isbn[0]);
//       }
//     })
// }

// export function singleBook(isbn) {
//   fetch(`https://openlibrary.org/isbn/${isbn}.json`)
//   .then((res) => res.json())
//   .then((data) => console.log(data.title))
// }

export function getMovies() {
  fetch('https://api.tvmaze.com/shows')
  .then((res) => res.json())
  .then((data) => {
    for(var i = 0; i < 20; i += 1) {
      movieID.push(data[i]);
    }
    console.log(movieID);
  })
}

export function like() {

}