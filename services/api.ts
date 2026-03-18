import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const API_URL = 'https://your-railway-api.com/api';

export const api = axios.create({ baseURL: API_URL });

// Injection automatique du token JWT
api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Appels
export const factCheckAPI = {
  submit: (data: { input_type: string; raw_input: string }) =>
    api.post('/fact-check/', data),
  getResult: (id: string) =>
    api.get(`/fact-check/${id}/`),
  getHistory: () =>
    api.get('/fact-check/history/'),
};

export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/token/', { email, password }),
  register: (data: object) =>
    api.post('/auth/register/', data),
};
