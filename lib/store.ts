import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { useShallow } from 'zustand/react/shallow';
// Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  level: number;
  experience: number;
  tournaments: number;
  wins: number;
}

export interface Tournament {
  id: number;
  title: string;
  prize: number;
  color: string;
  endDate: Date;
  participants: number;
  maxParticipants: number;
  gameType: string;
  status: 'active' | 'registration' | 'completed';
  description: string;
  rules: string[];
  schedule: {
    registration: string;
    tournament: string;
    results: string;
  };
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  featured: boolean;
  readTime: string;
  tags: string[];
}

// Main Store Interface
interface AppState {
  // UI State
  isMobileMenuOpen: boolean;
  isLoading: boolean;
  currentPage: string;
  
  // User State
  user: User | null;
  isAuthenticated: boolean;
  
  // Tournament State
  tournaments: Tournament[];
  selectedTournament: Tournament | null;
  
  // News State
  news: NewsArticle[];
  selectedCategory: string;
  searchTerm: string;
  
  // Contact Form State
  contactForm: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  
  // Actions
  setMobileMenuOpen: (open: boolean) => void;
  setLoading: (loading: boolean) => void;
  setCurrentPage: (page: string) => void;
  
  // User Actions
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  
  // Tournament Actions
  setTournaments: (tournaments: Tournament[]) => void;
  selectTournament: (tournament: Tournament | null) => void;
  joinTournament: (tournamentId: number) => Promise<void>;
  
  // News Actions
  setNews: (news: NewsArticle[]) => void;
  setSelectedCategory: (category: string) => void;
  setSearchTerm: (term: string) => void;
  
  // Contact Form Actions
  updateContactForm: (field: string, value: string) => void;
  submitContactForm: () => Promise<void>;
  resetContactForm: () => void;
}

// Create Store
type StoreSet = (fn: (state: AppState) => Partial<AppState>) => void;

export const useAppStore = create<AppState>()(
  devtools(
    (set, get) => ({
      // Initial State
      isMobileMenuOpen: false,
      isLoading: false,
      currentPage: '/',
      
      user: null,
      isAuthenticated: false,
      
      tournaments: [],
      selectedTournament: null,
      
      news: [],
      selectedCategory: 'All',
      searchTerm: '',
      
      contactForm: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      
      // UI Actions
      setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
      setLoading: (loading) => set({ isLoading: loading }),
      setCurrentPage: (page) => {
        // Only update if the page actually changed
        if (get().currentPage !== page) {
          set({ currentPage: page });
        }
      },
      
      // User Actions
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      
      login: async (email, password) => {
        set({ isLoading: true });
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const mockUser: User = {
            id: '1',
            name: 'John Doe',
            email,
            level: 25,
            experience: 15420,
            tournaments: 12,
            wins: 8,
          };
          
          set({ user: mockUser, isAuthenticated: true });
        } catch (error) {
          console.error('Login failed:', error);
        } finally {
          set({ isLoading: false });
        }
      },
      
      logout: () => set({ user: null, isAuthenticated: false }),
      
      // Tournament Actions
      setTournaments: (tournaments) => set({ tournaments }),
      selectTournament: (tournament) => set({ selectedTournament: tournament }),
      
      joinTournament: async (tournamentId) => {
        const { tournaments, user } = get();
        if (!user) return;
        
        set({ isLoading: true });
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const updatedTournaments = tournaments.map(t => 
            t.id === tournamentId 
              ? { ...t, participants: t.participants + 1 }
              : t
          );
          
          set({ tournaments: updatedTournaments });
        } catch (error) {
          console.error('Failed to join tournament:', error);
        } finally {
          set({ isLoading: false });
        }
      },
      
      // News Actions
      setNews: (news) => set({ news }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      setSearchTerm: (term) => set({ searchTerm: term }),
      
      // Contact Form Actions
      updateContactForm: (field, value) => 
        set(state => ({
          contactForm: { ...state.contactForm, [field]: value }
        })),
      
      submitContactForm: async () => {
        const { contactForm } = get();
        set({ isLoading: true });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          console.log('Contact form submitted:', contactForm);
          
          // Reset form after successful submission
          set({
            contactForm: {
              name: '',
              email: '',
              subject: '',
              message: '',
            }
          });
        } catch (error) {
          console.error('Failed to submit contact form:', error);
        } finally {
          set({ isLoading: false });
        }
      },
      
      resetContactForm: () => 
        set({
          contactForm: {
            name: '',
            email: '',
            subject: '',
            message: '',
          }
        }),
    }),
    {
      name: 'mykd-store',
    }
  )
);

// Optimized selectors
export const useUser = () => useAppStore(state => state.user);

export const useIsAuthenticated = () => useAppStore(state => state.isAuthenticated);

export const useTournaments = () => useAppStore(state => state.tournaments);

export const useNews = () => useAppStore(state => state.news);

export const useContactForm = () => useAppStore(state => state.contactForm);

// FIX: Move the selector outside the component render cycle
const uiSelector = (state: AppState) => ({
  isMobileMenuOpen: state.isMobileMenuOpen,
  isLoading: state.isLoading,
  currentPage: state.currentPage,
});

export const useUI = () => useAppStore(useShallow(uiSelector));