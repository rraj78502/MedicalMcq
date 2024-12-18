import { create } from 'zustand';
import type { AuthState } from '../types/User';
import { authService } from '../services/auth.service';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: true,

  setUser: (user) => set({ 
    user, 
    isAuthenticated: !!user,
    loading: false 
  }),

  login: async (email: string, password: string) => {
    try {
      const user = await authService.login(email, password);
      set({ user, isAuthenticated: true });
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Invalid credentials');
    }
  },

  signup: async (name: string, email: string, password: string) => {
    try {
      const user = await authService.signup(name, email, password);
      set({ user, isAuthenticated: true });
    } catch (error) {
      console.error('Signup error:', error);
      throw new Error('Failed to create account');
    }
  },

  logout: async () => {
    try {
      await authService.logout();
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      console.error('Logout error:', error);
    }
  },
}));