import axios from 'axios';

export const baseUrl = 'http://';

const instance = axios.create({
  baseURL: baseUrl,
  responseType: 'json',
});

instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, 'network error');
  }
);

export {axiosInstance};
