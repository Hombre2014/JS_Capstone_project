export function postLike(itemID) {
  itemID = parseInt(itemID, 10);
  // itemID += 1;
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/heJNlqA95tGYc4Sqtsfr/likes', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: itemID }),
  })
    .then((res) => res.ok)
    .then((data) => console.log(data));
  console.log("This is the itemID we get into API: ", itemID);
}

export const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/heJNlqA95tGYc4Sqtsfr/likes');
  const json = await response.json();
  console.log("This is json returned from API: ", json);
  return json;
};
