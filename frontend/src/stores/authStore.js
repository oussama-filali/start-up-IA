// 🔐 Store d'authentification - Zustand
import { create } from 'zustand';
import apiClient from '../lib/api';

/**
 * 🔐 Store global pour l'authentification
 * Gère : login, signup, token, user data
 */
export const useAuthStore = create((set, get) => ({
  // 📊 État
  user: null,
  token: localStorage.getItem('token') || null,
  isLoading: false,
  error: null,

  // ✅ Actions

  // 📝 Inscription
  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await apiClient.post('/api/auth/register', {
        email,
        password,
        name,
      });

      set({ isLoading: false });
      return data;
    } catch (error) {
      const errorMsg = error.response?.data?.error || '❌ Erreur inscription';
      set({ error: errorMsg, isLoading: false });
      throw error;
    }
  },

  // 🔑 Connexion
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await apiClient.post('/api/auth/login', {
        email,
        password,
      });

      const { token, user } = data;

      // 💾 Sauvegarder token
      localStorage.setItem('token', token);

      set({
        token,
        user,
        isLoading: false,
      });

      return data;
    } catch (error) {
      const errorMsg = error.response?.data?.error || '❌ Erreur connexion';
      set({ error: errorMsg, isLoading: false });
      throw error;
    }
  },

  // 🔄 Rafraîchir token
  refreshToken: async () => {
    try {
      const { token: oldToken } = get();
      if (!oldToken) return;

      const { data } = await apiClient.post('/api/auth/refresh', {
        token: oldToken,
      });

      localStorage.setItem('token', data.token);
      set({ token: data.token });
    } catch (error) {
      console.error('❌ Erreur rafraîchissement token:', error);
      get().logout();
    }
  },

  // 🔓 Déconnexion
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null, error: null });
  },

  // 🔍 Vérifier si connecté
  isAuthenticated: () => {
    return get().token !== null;
  },

  // 🧹 Réinitialiser erreur
  clearError: () => {
    set({ error: null });
  },
}));
