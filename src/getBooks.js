export const getMovies = async(baseUrl) => {
   const response = await fetch(baseUrl);
    var data = await response.json();
    return data;
}

export const getShows = async (url) =>{
    const response = await fetch(url);
     var data = await response.json();
     return data;
}
