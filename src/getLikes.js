import { displayComments } from "./new";

export function postLike(itemID) {
  itemID = parseInt(itemID, 10);
  // itemID += 1;
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jRtct70SjcfSLKMAAVvg/likes', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: itemID }),
  })
    .then((res) => res.ok)
    .then((data) => console.log(data));
  console.log("This is the itemID we get into API: ", itemID);
  // location.reload();
}

// export function displayLikes(likes) {
//   console.log("This is from displayLikes function:", likes);
//   return likes;
// }

// export function getLikes() {
//   fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jRtct70SjcfSLKMAAVvg/likes')
//     .then((res) => res.json())
//     .then((data) => displayLikes(data));
//     // console.log("This is from GET data", data);
// }

export const getLikes = async() => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jRtct70SjcfSLKMAAVvg/likes');
  const json = await response.json();
  return json;
};

// export const getLikes = async () => {
//   const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/O7MqNeyOkSax7XJq9I3Z/likes');
//   const json = await response.json();
//   return json;
// };
