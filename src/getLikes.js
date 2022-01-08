const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1nLM5MTDuqVGBJxBgtuq/likes');
  const json = await response.json();
  return json;
};

export default getLikes;