import axios from 'axios';

const axiosInstanceDb = axios.create({
    baseURL:'http://localhost:3031/',
    timeout: 5000,
    timeoutErrorMessage: 'Try afer some time'
});
export default axiosInstanceDb;