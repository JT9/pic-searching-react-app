//Axios and Unsplash configuration
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 1e1f62fa1554eeccce44fb897964111d8d58e44a47fa4c576b2a9b1ec30f190f'
    }
});