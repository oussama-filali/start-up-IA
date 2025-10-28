// 🌍 Configuration API Frontend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  ENDPOINTS: {
    AUTH: {
      REGISTER: `${API_BASE_URL}/api/auth/register`,
      LOGIN: `${API_BASE_URL}/api/auth/login`,
      REFRESH: `${API_BASE_URL}/api/auth/refresh`,
    },
    COURSES: {
      LIST: `${API_BASE_URL}/api/courses`,
      GET: (id) => `${API_BASE_URL}/api/courses/${id}`,
      PROGRESS: (id) => `${API_BASE_URL}/api/courses/${id}/progress`,
    },
    AI: {
      CHAT: `${API_BASE_URL}/api/ai/chat`,
      HISTORY: `${API_BASE_URL}/api/ai/history`,
    },
    GAMIFICATION: {
      BADGES: `${API_BASE_URL}/api/gamification/badges`,
      UNLOCK_BADGE: `${API_BASE_URL}/api/gamification/badges/unlock`,
      STATS: `${API_BASE_URL}/api/gamification/stats`,
      LEADERBOARD: `${API_BASE_URL}/api/gamification/leaderboard`,
    },
  },
};

// 🔧 Instance Axios avec token automatique
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// 🔐 Intercepteur pour ajouter le token JWT
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ⚠️ Gestion des erreurs
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
