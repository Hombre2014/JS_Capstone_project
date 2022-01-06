import './style.css';
import logo from './logoImage.jpg';
import getShows from './getMovies.js';

// Adding the logo image
const element = document.querySelector('.logoContainer');
const mylogo = new Image();
mylogo.className = 'logo';
mylogo.src = logo;

element.append(mylogo);



getShows();

