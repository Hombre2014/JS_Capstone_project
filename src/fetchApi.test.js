import { getMovies } from "./fetchAPI";

describe('Testing if the movies are retrieved from API perfectly',()=>{
    test('Testing item counter function is working', ()=>{
        //Arrange
        const likeArray = [];
        //Act
        const response = getMovies(likeArray);

        //Assert
        expect(response.length).toBe(0);
    });
});