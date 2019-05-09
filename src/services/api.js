import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://api.github.com',
});

export default api;
