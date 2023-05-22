import axios from 'axios'

const api = axios.create({
  baseURL: 'http://165.232.121.76:3000',
  // // //   timeout: 1000,
  // baseURL: 'http://localhost:3001',
  headers: { 'X-Custom-Header': 'foobar' },
});


// const loginApi = axios.create({
//   baseURL: 'https://art-cause.com:3003'
// });


export default api