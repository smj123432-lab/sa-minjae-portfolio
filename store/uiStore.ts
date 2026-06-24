import { create } from 'zustand'

interface UIState {
  activeSectionId: string
  isMobileMenuOpen: boolean
  activeStackFilters: string[]
  setActiveSectionId: (id: string) => void
  setMobileMenuOpen: (open: boolean) => void
  toggleMobileMenu: () => void
  toggleStackFilter: (stack: string) => void
  clearStackFilters: () => void
}

export const useUIStore = create<UIState>((set) => ({
  activeSectionId: 'hero',
  isMobileMenuOpen: false,
  activeStackFilters: [],
  setActiveSectionId: (id) => set({ activeSectionId: id }),
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  toggleStackFilter: (stack) =>
    set((state) => ({
      activeStackFilters: state.activeStackFilters.includes(stack)
        ? state.activeStackFilters.filter((s) => s !== stack)
        : [...state.activeStackFilters, stack],
    })),
  clearStackFilters: () => set({ activeStackFilters: [] }),
}))
