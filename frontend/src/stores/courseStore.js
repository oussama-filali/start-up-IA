// 📚 Store cours - Zustand
import { create } from 'zustand';
import apiClient from '../lib/api';

/**
 * 📚 Store pour gérer les cours
 * Listing, détails, progression
 */
export const useCourseStore = create((set, get) => ({
  // 📊 État
  courses: [],
  currentCourse: null,
  userProgress: {},
  isLoading: false,
  filter: {
    category: null,
    difficulty: null,
  },

  // ✅ Actions

  // 📚 Récupérer tous les cours
  fetchCourses: async (category = null, difficulty = null) => {
    set({ isLoading: true });
    try {
      let url = '/api/courses';
      const params = new URLSearchParams();

      if (category) params.append('category', category);
      if (difficulty) params.append('difficulty', difficulty);

      if (params.toString()) url += `?${params.toString()}`;

      const { data } = await apiClient.get(url);
      set({
        courses: data.courses,
        filter: { category, difficulty },
        isLoading: false,
      });

      return data.courses;
    } catch (error) {
      console.error('❌ Erreur récupération cours:', error);
      set({ isLoading: false });
    }
  },

  // 📖 Récupérer un cours spécifique
  fetchCourse: async (courseId) => {
    set({ isLoading: true });
    try {
      const { data } = await apiClient.get(`/api/courses/${courseId}`);
      set({ currentCourse: data.course, isLoading: false });
      return data.course;
    } catch (error) {
      console.error('❌ Erreur récupération cours:', error);
      set({ isLoading: false });
    }
  },

  // 📈 Récupérer la progression dans un cours
  fetchProgress: async (courseId) => {
    try {
      const { data } = await apiClient.get(
        `/api/courses/${courseId}/progress`
      );

      set((state) => ({
        userProgress: {
          ...state.userProgress,
          [courseId]: data.progress,
        },
      }));

      return data.progress;
    } catch (error) {
      console.error('❌ Erreur récupération progression:', error);
    }
  },

  // ✅ Mettre à jour progression
  updateProgress: async (courseId, progressPercentage, completed = false) => {
    try {
      const { data } = await apiClient.post(
        `/api/courses/${courseId}/progress`,
        {
          progress_percentage: progressPercentage,
          completed,
        }
      );

      set((state) => ({
        userProgress: {
          ...state.userProgress,
          [courseId]: data.progress,
        },
      }));

      return data.progress;
    } catch (error) {
      console.error('❌ Erreur mise à jour progression:', error);
      throw error;
    }
  },
}));
