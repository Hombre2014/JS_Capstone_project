function submitComment(itemId, userName, userComment) {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1nLM5MTDuqVGBJxBgtuq/comments', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: `'${itemId}'`, username: userName, comment: userComment }),
  })
    .then((res) => res.ok)
    .then((data) => (data));
}

const displayComments = (itemId) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1nLM5MTDuqVGBJxBgtuq/comments?item_id='${itemId}'`)
    .then((res) => res.json())
    .then((data) => {
      const commentsList = document.querySelector('.comments-list');
      for (let i = 0; i < data.length; i += 1) {
        const singleComment = document.createElement('p');
        singleComment.innerText = `${data[i].creation_date}, ${data[i].username}: ${data[i].comment}`;
        singleComment.classList.add('single-comment');
        commentsList.appendChild(singleComment);
      }
      const allComments = document.getElementsByClassName('single-comment');
      const counter = allComments.length;
      const commentsCounter = document.getElementsByClassName('comments-count');
      commentsCounter[0].innerText = `(${counter})`;
    });
};

const getComments = (itemId) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1nLM5MTDuqVGBJxBgtuq/comments?item_id='${itemId}'`)
    .then((res) => res.json())
    .then((data) => {
      const commentsList = document.querySelector('.comments-list');
      const singleComment = document.createElement('p');
      singleComment.innerText = `${data[itemId].creation_date}, ${data[itemId].username}: ${data[itemId].comment}`;
      commentsList.appendChild(singleComment);
    });
  displayComments(itemId);
};

export { getComments, submitComment, displayComments };