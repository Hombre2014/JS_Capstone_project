export let storeISBNS= [];
export const getBooks = () => {
    fetch('https://openlibrary.org/search.json?q=javascript,first_publish_year:2021')
    .then((res) => res.json())
    .then((data) =>{ const booksCount = data.docs.length;
        for(var i = 0; i < booksCount; i += 1) {
          storeISBNS.push(data.docs[i].isbn[0]);
        }
        //console.log(storeISBNS);
    });
}

export const getBookInfo = async (bookID) =>{
    const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&callback=processBooks`);
    return response.json();
}