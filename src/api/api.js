import axios from 'axios';
import {checkFailRoute} from "../utils";

const createApi = (onError) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: `5000`,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    checkFailRoute(onError, error);
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};


export default createApi;
