import './style.css';
import logo from './logoImage.jpg';
import { getBooks, storeISBNS, getBookInfo} from './getBooks.js';

//Adding the logo image
const element = document.querySelector('.logoContainer');
const mylogo = new Image();
mylogo.className = 'logo';
mylogo.src = logo;

element.append(mylogo);

//ISBN array
const myISBN = [];

//Dealing books API

const BookArray = getBooks();
//console.log(BookArray);
//Finding add the ISBNs

console.log(storeISBNS);
console.log(getBookInfo(storeISBNS[0]));
/*const generateID = () =>{
    for(let i=0 ;i<storeISBNS.length; i++){
       console.log(getBookInfo(storeISBNS[i]));
    }
}*/
//generateID();