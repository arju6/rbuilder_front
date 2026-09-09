import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://builder-server-kt4u.onrender.com',
  timeout: 5000,
});

//response interceptors:handiling the global/common errors
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response received:');
    return response;


  },
    (error) => {
     if (error.response) {
        const status = error.response.status;
        if (status === 401) {
          console.error('Un-Authorized access');
        } else if (status === 404) {
          console.error('Resource not found.');
        } else if (status === 500) {
          console.error('Internal server error. Please try again later.');
        } else if (error.request) {
          console.error('No response received from the server');
        } else{
            console.log("Error"+error.message);
        }
        return Promise.reject(error);
     }
    }
    
);

export default axiosInstance