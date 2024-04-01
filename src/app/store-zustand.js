import create from 'zustand'
export const useLangProject = create((set) => (
    {
        lang: 'es',
        spanish: () => {
            set((state)=>({lang:'es'}));
        },
        inglish:()=>{
            set((state)=>({lang:'en'}));
        }
    }
))
export const useStateModal = create((set)=>({
    modal_contact:false,
    modal_project:false,
    projectSelected:null,
    setModalContact:()=>{
        set((state)=>({}))
    },
    setModalProject:(value)=>{
        set((state)=>({modal_project:value}))
    },
    setProjectSelected:(value)=>{
        set((state)=>({projectSelected:value}))
    }
}))