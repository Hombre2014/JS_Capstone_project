export function postLike(itemID) {
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lg6CqLna0u7Vr2K5xAMp/likes', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ item_id: itemID }),
    })
      .then((res) => res.ok)
      .then((data) => console.log(data));
}


export const getLikes = async () => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lg6CqLna0u7Vr2K5xAMp/likes');
    const json = await response.json();
    return json;
  };