export function submitComment(itemId, userName, userComment) {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p0Upap7Zse2e8Jq92I1x/comments', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: `'${itemId}'`, username: userName, comment: userComment }),
  })
    .then((res) => res.ok)
    .then((data) => console.log(data));
}

export function displayComments(itemId) {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p0Upap7Zse2e8Jq92I1x/comments?item_id='${itemId}'`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const commentsList = document.querySelector('.comments-list');
      // const lastElement = document.getElementById('dummy');
      for (let i = 0; i < data.length; i += 1) {
        const singleComment = document.createElement('p');
        singleComment.innerText = `${data[i].creation_date}, ${data[i].username}: ${data[i].comment}`;
        console.log(singleComment);
        commentsList.appendChild(singleComment);
      }
      // data.forEach((post) => {
      //   const singleComment = document.createElement('p');
      //   singleComment.innerText = `${post.creation_date}, ${post.username}: ${post.comment}`;
      //   console.log(singleComment);
      //   commentsList.appendChild(singleComment);
      // });
    });
}