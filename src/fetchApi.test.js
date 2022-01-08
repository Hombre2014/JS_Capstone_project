import mockData from './__mocks__/movieMock.js';
import { getMovies } from './fetchAPI';

describe('Testing if the movies are retrieved from API perfectly', () => {
  test('Testing item counter function is working', () => {
    // Arrange
    const movieArray = mockData
    // Act
    const response = getMovies(movieArray);

    // Assert
    expect(response.length).toBe(4);
  });

  test('Check movie title is the same', ()=>{

    const likeArray = mockData;

    const response = getMovies(likeArray);

    expect(response[0].name).toBe('Under the Dome');


  });
});