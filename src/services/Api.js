import axios from 'axios';

const fetchImages = async (searchImagesName, numPage, perPage) => {
  const baseUrl = `https://pixabay.com/api/`;
  const paramsUrl = {
    params: {
      key: '37645850-cbffd1b84ba77554534d72cec',
      q: searchImagesName,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: numPage,
      per_page: perPage,
    },
  };
  const images = await axios.get(baseUrl, paramsUrl);

  return images.data;
};

export default fetchImages;
