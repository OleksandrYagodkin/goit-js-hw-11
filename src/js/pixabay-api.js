import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49742699-859ed69688f97e3fc464fd8bc';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })

    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}
