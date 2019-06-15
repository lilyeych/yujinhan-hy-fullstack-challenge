import axios from 'axios';

const KEY = '28f680c88dd8664f5095b25d1a097906';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY,
  }
});
