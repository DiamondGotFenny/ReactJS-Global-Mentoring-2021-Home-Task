import axios from 'axios';

const backendUrl = 'http://localhost:4000';

const instanceAxios = axios.create({
  baseURL: backendUrl,
  timeout: 5000,
});

export default {
  get: instanceAxios.get,
  post: instanceAxios.post,
  put: instanceAxios.put,
  delete: instanceAxios.delete,
};
