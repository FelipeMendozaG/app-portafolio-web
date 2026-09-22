import create from 'zustand';

export const useLangProject = create((set) => ({
    lang: 'es',
    spanish: () => set({ lang: 'es' }),
    inglish: () => set({ lang: 'en' })
}));

export const useStateModal = create((set) => ({
    modal_contact: false,
    modal_project: false,
    projectSelected: null,
    setModalContact: () => set((state) => ({ modal_contact: !state.modal_contact })),
    setModalProject: (value) => set({ modal_project: value }),
    setProjectSelected: (value) => set({ projectSelected: value })
}));