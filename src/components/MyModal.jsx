import { useStateModal } from '../app/store-zustand'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { useLangProject } from '../app/store-zustand';


const MyModal = () => {
    const [projectSelected, modal_project, setModalProject] = useStateModal(state => [state.projectSelected, state.modal_project, state.setModalProject]);
    const [lang] = useLangProject(state => [state.lang]);
    if (!modal_project) {
        return <></>
    }
    return <>
        <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-ink/80 p-4 backdrop-blur-sm" onClick={() => setModalProject(false)}>
            <motion.div initial={{ opacity: 0, y: 18, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="glass relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl shadow-card" onClick={(event) => event.stopPropagation()}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r md:p-8">
                        <div className="w-11/12">
                            <Swiper modules={[Pagination, Navigation]} pagination={{ clickable: true }} navigation autoplay={{ delay: 3000 }} className="mySwiper overflow-hidden rounded-xl">
                                {
                                    projectSelected.galery?.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={item} alt={projectSelected.title} className="aspect-video w-full object-cover"/>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <br />
                            <hr />
                            <h2 className='mb-4 mt-8 font-mono text-xs uppercase tracking-widest text-slate-400'>{lang === 'es' ? 'Tecnologías utilizadas' : 'Technology stack'}</h2>
                            <div className="flex flex-wrap gap-4 text-2xl text-cyan">
                                {
                                    projectSelected.icons?.map((item, index) => (
                                        <FontAwesomeIcon key={index} icon={item} size='2xl' className='mx-2' />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="p-7 md:p-10">
                        <p className="eyebrow mb-4">case study / {lang === 'es' ? 'proyecto' : 'project'}</p>
                        <h2 className="mb-6 text-3xl font-semibold text-white">{projectSelected.title}</h2>
                        <p className="text-sm leading-7 text-slate-400">{projectSelected.descriptionModal}</p>
                        <div className="mt-10 border-t border-white/10 pt-6">
                            <h2 className='mb-4 font-mono text-xs uppercase tracking-widest text-slate-400'>{lang === 'es' ? 'Repositorio' : 'Repository'}</h2>
                            {projectSelected.github ? <a href={projectSelected.github} className='inline-flex items-center gap-3 text-cyan transition hover:text-white' target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare} size='2x' /> <span className="font-mono text-xs">GitHub -&gt;</span>
                            </a> : <span className="text-sm text-slate-500">{lang === 'es' ? 'Repositorio privado' : 'Private repository'}</span>}
                        </div>
                    </div>
                </div>
                <button aria-label="Close project details" onClick={() => setModalProject(false)} className="absolute right-4 top-4 p-2 text-slate-400 transition hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </motion.div>
        </div>
    </>
}
export default MyModal;