export const getBooks = async() => {
   const response = await fetch('https://openlibrary.org/search.json?q=javascript,first_publish_year:2021');
    var data = await response.json();
    return data;
}

export const getBookInfo = async (bookID) =>{
    const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${bookID}`);
     var data = await response.text();
     return data;
}
