import './style.css';
import logo from './logoImage.jpg';
import { getBooks, getBookInfo} from './getBooks.js';

//Adding the logo image
const element = document.querySelector('.logoContainer');
const mylogo = new Image();
mylogo.className = 'logo';
mylogo.src = logo;

element.append(mylogo);

//ISBN array
let bookID = []
let frontPageInfo = [];

//Store ISBN numbers in an array
const storeID = async() =>{
    const bookResponse = await getBooks();
    for(let i=0 ; bookResponse.docs.length;i++){
        bookID.push(bookResponse.docs[i].isbn[0])
    }
}

const callBooks = async () =>{
    for(let i=0; i<8; i++){
      let bookInfo = await getBookInfo(bookID[i]);
      frontPageInfo.push(bookInfo);
    }
}
storeID()
callBooks()

console.log(frontPageInfo);
