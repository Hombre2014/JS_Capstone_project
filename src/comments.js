export default function postLike() {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lg6CqLna0u7Vr2K5xAMp/likes', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: 1 }),
  })
    .then((res) => res.ok)
    .then((data) => console.log(data));
}