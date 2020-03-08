import axios from 'axios';

const createApi = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: `5000`,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.response.status === 403) {
      return {data: null};
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


export default createApi;
