export function submitComment() {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p0Upap7Zse2e8Jq92I1x/comments', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: '2', username: 'John', comment: 'This is an OK movie.' }),
  })
    .then((res) => res.ok);
// .then((data) => console.log(data));
}

export function getComments() {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p0Upap7Zse2e8Jq92I1x/comments?item_id=2')
    .then((res) => res.json());
  // .then((data) => console.log(data));
}

submitComment();
getComments();