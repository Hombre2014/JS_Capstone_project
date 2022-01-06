export function postLike(itemID) {
  itemID = parseInt(itemID, 10);
  // itemID += 1;
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O7MqNeyOkSax7XJq9I3Z/likes', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: itemID }),
  })
    .then((res) => res.ok)
    .then((data) => console.log(data));
  console.log("This is the itemID we get into API: ", itemID);
}

export function displayLikes(likes) {
  return likes;
}

export function getLikes() {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O7MqNeyOkSax7XJq9I3Z/likes')
    .then((res) => res.ok)
    .then((data) => displayLikes(data));
}