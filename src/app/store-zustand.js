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
    setModalContact:()=>{

    }
}))