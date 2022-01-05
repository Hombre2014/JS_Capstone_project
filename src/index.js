import './style.css';
import logo from './logoImage.jpg';
import postLike from './comments';

const element = document.querySelector('.logoContainer');
const mylogo = new Image();
mylogo.className = 'logo';
mylogo.src = logo;

element.append(mylogo);

// getMovies();
postLike();