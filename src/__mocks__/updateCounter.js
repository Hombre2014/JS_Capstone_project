export default [
  {
    comment: 'Its great',
    creation_date: '2022-01-06',
    username: 'Kane',
  },
  {
    comment: 'This is really goooooood!',
    creation_date: '2022-01-07',
    username: 'Ferer',
  },
  {
    comment: 'Asking yourself what the Government can do for you! Watch this!',
    creation_date: '2022-01-07',
    username: 'Marin',
  },
  {
    comment: 'This is good',
    creation_date: '2022-01-07',
    username: 'Bonke',
  },
  {
    comment: 'I am doing to see the movie again!',
    creation_date: '2022-01-07',
    username: 'Marilea',
  },
];

// const closeBtn = document.getElementsByClassName('close-btn');
// modalPopUp.style.display = 'block';
// modalPopUp.style.width = '90vw';
// modalPopUp.style.height = '90vh';
// modalPopUp.style.backgroundColor = '#f6f6f6';
// const content = `
//   <div class="show-container">
//     <span class="close-btn">×</span>
//     <div class="show-info">
//       <div class="poster">
//         <img src="${showsList[showID].image.medium}", alt="movie poster">
//       </div>
//       <div class="details">
//         <h1>${showsList[showID].name}</h1>
//         <h2>Summary:</h2>
//         <p>${showsList[showID].summary}</p>
//         <div class="meta">
//           <div class="left-side">
//             <span>Language: ${showsList[showID].language}</span>
//             <span>Genre: ${showsList[showID].genres[0]}, ${showsList[showID].genres[1]}, ${showsList[showID].genres[2]}</span>
//           </div>
//           <div class="right-side">
//             <span>Rating: ${showsList[showID].rating.average}</span>
//             <span>Premiered: ${showsList[showID].premiered}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="comments-section">
//       <h2 class="comments-title">Comments <span class="comments-count" data-id=${showID + 1}></span></h2>
//       <div class="comments-list"></div>
//       <h3>Add a new comment</h3>
//       <form id="form" data-id=${showID + 1}>
//         <input type="text" placeholder="Your name" id="name" data-id=${showID + 1}>
//         <textarea id="comment-text" data-id=${showID + 1} placeholder="Your comment" maxlength="500" rows="4"></textarea>
//         <button id="submit-btn" type="submit" data-id=${showID + 1}>Comment</button>
//       </form>
//     </div>
//   </div>
//   `;

// const userName = document.getElementById('name').value;
// const comment = document.getElementById('comment-text').value;
// const singleComment = document.createElement('p');
// const todaysDate = new Date();
// const currentDate = convertDate(todaysDate);
// singleComment.innerText = `${currentDate}, ${userName}: ${comment}`;
// singleComment.classList.add('single-comment');
// const commentsList = document.querySelector('.comments-list');
// commentsList.appendChild(singleComment);
// commentsList = '';

function updateCounter() {
  const allComments = document.getElementsByClassName('single-comment');
  const counter = allComments.length;
  const commentsCounter = document.getElementsByClassName('comments-count');
  commentsCounter[0].innerText = `(${counter})`;
  const updatedCounter = commentsCounter;
  return updatedCounter;
}

export default updateCounter;