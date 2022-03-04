// const axios = require('axios')
import axios from 'axios';

const apiService = axios.create({
  // baseURL: 'https://g1.globo.com/'
});

export {
  apiService
}