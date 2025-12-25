import { create } from 'zustand';
import { Book } from '../types';

interface AppState {
  currentViewedBook: Book | null;
  setCurrentViewedBook: (book: Book | null) => void;
  isLoggedIn: boolean;
  username: string | null;
  login: (name: string) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentViewedBook: null,
  setCurrentViewedBook: (book) => set({ currentViewedBook: book }),
  isLoggedIn: false,
  username: null,
  login: (name) => set({ isLoggedIn: true, username: name }),
  logout: () => set({ isLoggedIn: false, username: null }),
}));
