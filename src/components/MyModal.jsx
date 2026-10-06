import { useEffect } from 'react';
import { useStateModal } from '../app/store-zustand';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLangProject } from '../app/store-zustand';

const MyModal = () => {
    const [projectSelected, modal_project, setModalProject] = useStateModal(state => [state.projectSelected, state.modal_project, state.setModalProject]);
    const [lang] = useLangProject(state => [state.lang]);

    useEffect(() => {
        if (modal_project) {
            document.body.style.overflow = 'hidden';
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') setModalProject(false);
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [modal_project, setModalProject]);

    if (!modal_project || !projectSelected) {
        return null;
    }

    return (
        <AnimatePresence>
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-project-title"
                className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-ink/80 p-4 sm:p-6 backdrop-blur-md"
                onClick={() => setModalProject(false)}
            >
                <motion.div
                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 18, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="glass relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/15 bg-panel shadow-card"
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Panel izquierdo: Galería y Tecnologías */}
                        <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                            <div className="w-full">
                                <Swiper
                                    modules={[Pagination, Navigation]}
                                    pagination={{ clickable: true }}
                                    navigation
                                    className="mySwiper overflow-hidden rounded-2xl border border-white/10"
                                >
                                    {
                                        projectSelected.galery?.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <img
                                                    src={item}
                                                    alt={`${projectSelected.title} captura ${index + 1}`}
                                                    className="aspect-video w-full object-cover"
                                                />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>

                                <div className="mt-8 border-t border-white/10 pt-6">
                                    <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-400">
                                        {lang === 'es' ? 'Tecnologías utilizadas' : 'Technology stack'}
                                    </h2>
                                    <div className="flex flex-wrap items-center gap-4 text-cyan">
                                        {
                                            projectSelected.icons?.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl transition hover:border-cyan/40 hover:bg-cyan/10"
                                                >
                                                    <FontAwesomeIcon icon={item} />
                                                </div>
                                            ))
                                        }
                                    </div>

                                    {projectSelected.skills && (
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {projectSelected.skills.map((skill) => (
                                                <span key={skill} className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Panel derecho: Descripción y Enlaces */}
                        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                            <div>
                                <p className="eyebrow mb-3">case study / {lang === 'es' ? 'detalles' : 'details'}</p>
                                <h2 id="modal-project-title" className="mb-5 text-2xl sm:text-3xl font-bold text-white">
                                    {projectSelected.title}
                                </h2>
                                <p className="text-sm leading-7 text-slate-300">
                                    {projectSelected.descriptionModal || projectSelected.description}
                                </p>
                            </div>

                            <div className="mt-8 border-t border-white/10 pt-6">
                                <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-400">
                                    {lang === 'es' ? 'Código y Repositorio' : 'Source & Repository'}
                                </h3>
                                {projectSelected.github ? (
                                    <a
                                        href={projectSelected.github}
                                        className="inline-flex items-center gap-3 rounded-xl border border-cyan/30 bg-cyan/10 px-4 py-2.5 font-mono text-xs font-semibold text-cyan transition hover:bg-cyan hover:text-ink"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faGithubSquare} className="text-lg" />
                                        <span>{lang === 'es' ? 'Ver en GitHub' : 'View on GitHub'} →</span>
                                    </a>
                                ) : (
                                    <span className="inline-block rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 font-mono text-xs text-slate-400">
                                        🔒 {lang === 'es' ? 'Repositorio privado / Corporativo' : 'Private repository / Corporate'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Botón Cerrar */}
                    <button
                        aria-label="Cerrar modal de detalles"
                        onClick={() => setModalProject(false)}
                        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-panel/80 text-slate-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                    >
                        <FontAwesomeIcon icon={faXmark} className="text-base" />
                    </button>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default MyModal;