import mockData from '../__mocks__/movieMock.js';
import commentsData from '../__mocks__/commentsMock.js';
import { getMovies } from '../fetchAPI.js';
import commentsCounter from '../commentsCounter.js';

describe('Testing if the movies are retrieved from API perfectly', () => {
  test('Testing item counter function is working', () => {
    // Arrange
    const movieArray = mockData;
    // Act
    const response = getMovies(movieArray);
    // Assert
    expect(response.length).toBe(4);
  });

  test('Check movie title is the same', () => {
    // Arrange
    const likeArray = mockData;
    // Act
    const response = getMovies(likeArray);
    // Assert
    expect(response[0].name).toBe('Under the Dome');
  });
});

describe('Testing if the comments are retrieved from the Involvement API correctly', () => {
  test('Testing comments counter function is working', () => {
    // Arrange
    const commnetsArray = commentsData;
    // Act
    const response = commentsCounter(commnetsArray);
    // Assert
    expect(response.length).toBe(5);
  });

  test('Check that the first comments is from user with username "Kane"', () => {
    // Arrange
    const commnetsArray = commentsData;
    // Act
    const response = commentsCounter(commnetsArray);
    // Assert
    expect(response[0].username).toBe('Kane');
  });
});