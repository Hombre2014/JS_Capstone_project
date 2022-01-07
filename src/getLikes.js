import { displayComments } from "./new";

export function postLike(itemID) {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xyqrGgTcdx9Ydfnm5uk2/likes', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: `${itemID}` }),
  })
    .then((res) => res.ok)
    .then((data) => console.log(data));
  console.log("This is the itemID we get into API: ", itemID);
}

export const getLikes = async() => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xyqrGgTcdx9Ydfnm5uk2/likes');
  const json = await response.json();
  return json;
};
