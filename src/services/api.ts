import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.tce.ap.gov.br/api',
});

export default api;
