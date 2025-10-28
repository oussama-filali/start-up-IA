// 🎮 Store gamification - Zustand
import { create } from 'zustand';
import apiClient from '../lib/api';

/**
 * 🎮 Store pour gérer la gamification
 * Badges, XP, Streaks, Leaderboard
 */
export const useGamificationStore = create((set, get) => ({
  // 📊 État
  stats: {
    xp: 0,
    level: 1,
    streakDays: 0,
    badgesUnlocked: 0,
    globalRank: 0,
  },
  badges: [],
  leaderboard: [],
  isLoading: false,

  // ✅ Actions

  // 📊 Récupérer les stats
  fetchStats: async () => {
    set({ isLoading: true });
    try {
      const { data } = await apiClient.get('/api/gamification/stats');
      set({ stats: data.stats, isLoading: false });
      return data.stats;
    } catch (error) {
      console.error('❌ Erreur récupération stats:', error);
      set({ isLoading: false });
    }
  },

  // 🏆 Récupérer les badges
  fetchBadges: async () => {
    set({ isLoading: true });
    try {
      const { data } = await apiClient.get('/api/gamification/badges');
      set({ badges: data.badges, isLoading: false });
      return data.badges;
    } catch (error) {
      console.error('❌ Erreur récupération badges:', error);
      set({ isLoading: false });
    }
  },

  // 🔓 Débloquer badge
  unlockBadge: async (badgeId, xpReward) => {
    try {
      const { data } = await apiClient.post('/api/gamification/badges/unlock', {
        badgeId,
        xpReward,
      });

      // 🔄 Rafraîchir les stats et badges
      await get().fetchStats();
      await get().fetchBadges();

      return data;
    } catch (error) {
      console.error('❌ Erreur déblocage badge:', error);
      throw error;
    }
  },

  // 🏅 Récupérer le leaderboard
  fetchLeaderboard: async (limit = 10) => {
    set({ isLoading: true });
    try {
      const { data } = await apiClient.get(
        `/api/gamification/leaderboard?limit=${limit}`
      );
      set({ leaderboard: data.leaderboard, isLoading: false });
      return data.leaderboard;
    } catch (error) {
      console.error('❌ Erreur récupération leaderboard:', error);
      set({ isLoading: false });
    }
  },

  // 🎁 Ajouter XP
  addXP: (amount) => {
    set((state) => ({
      stats: {
        ...state.stats,
        xp: state.stats.xp + amount,
      },
    }));
  },
}));
