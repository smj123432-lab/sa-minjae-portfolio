import { create } from 'zustand'

interface UIState {
  activeSectionId: string
  isMobileMenuOpen: boolean
  setActiveSectionId: (id: string) => void
  setMobileMenuOpen: (open: boolean) => void
  toggleMobileMenu: () => void
}

export const useUIStore = create<UIState>((set) => ({
  activeSectionId: 'hero',
  isMobileMenuOpen: false,
  setActiveSectionId: (id) => set({ activeSectionId: id }),
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}))
