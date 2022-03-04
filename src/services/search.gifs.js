/**
 * https://api.giphy.com/v1/gifs/search?
 * api_key=I6qUEDUJI5npLukxvlGq8aghXwhpYxvW
 * &q=james
 * &limit=25
 * &offset=0
 * &rating=g
 * &lang=en
 */

function searchGifs({ keyword = 'random' }) {
  const url = `${process.env.REACT_APP_GIPHY_URL}search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${keyword.replaceAll(" ", "+")}&limit=20&offset=0&rating=g&lang=en`;

  return fetch(url)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      const { data } = response;
      if (Array.isArray(data)) {
        const urlImage = data.map(image => {
          const { id, title, images } = image;
          const { url } = images.downsized_medium;

          return { title, id, url };
        });

        return urlImage;
      } else {
        console.log("No data");
      }
    })
    .catch(error => console.error(error));
}

export default searchGifs;
