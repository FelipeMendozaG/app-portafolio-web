import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import skills from '../data/skills';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { useLangProject } from '../app/store-zustand';
import { motion, AnimatePresence } from 'framer-motion';

const MySkills = () => {
    const [
        lang
    ] = useLangProject(state => [
        state.lang
    ]);
    const techSkills = skills[lang] || [];
    const [selectedTech, setSelectedTech] = useState(null);

    const handleTechSelect = (tech) => {
        if (selectedTech?.title === tech.title) {
            setSelectedTech(null);
        } else {
            setSelectedTech(tech);
        }
    };

    return (
        <div className="mx-auto mt-16 w-full max-w-6xl px-5 sm:px-8">
            <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                    <p className="eyebrow mb-2">02 / stack & tooling</p>
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                        {lang === 'es' ? 'Tecnologías y herramientas' : 'Technologies and tools'}
                    </h3>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-400">
                        {techSkills.length} {lang === 'es' ? 'tecnologías dominadas' : 'technologies mastered'}
                    </span>
                </div>
            </div>

            <Swiper
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 12
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 16
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 24
                    }
                }}
                loop={true}
                className="mySwiper py-3"
                autoplay={{
                    delay: 2800,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
            >
                {techSkills.map((tech, index) => {
                    const isSelected = selectedTech?.title === tech.title;
                    return (
                        <SwiperSlide key={index}>
                            <motion.button
                                type="button"
                                whileHover={{ y: -6 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleTechSelect(tech)}
                                aria-label={`${tech.title}: ${tech.description}`}
                                className={`glass group flex h-48 w-full flex-col items-center justify-center rounded-2xl p-5 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                                    isSelected 
                                        ? 'border-cyan bg-cyan/15 shadow-glow ring-1 ring-cyan' 
                                        : 'hover:border-cyan/40 hover:bg-white/[0.06]'
                                }`}
                            >
                                <div className="relative mb-4 flex h-20 w-20 items-center justify-center">
                                    <img
                                        src={tech.image}
                                        alt={tech.title}
                                        className="max-h-16 max-w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <p className="font-mono text-sm font-medium text-slate-200 group-hover:text-cyan transition-colors">
                                    {tech.title}
                                </p>
                                <span className="mt-1 text-[10px] font-mono text-slate-400 opacity-60 group-hover:opacity-100">
                                    {isSelected 
                                        ? (lang === 'es' ? '✓ Activo' : '✓ Active')
                                        : (lang === 'es' ? 'Ver detalle' : 'Details')
                                    }
                                </span>
                            </motion.button>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Panel de detalle de tecnología seleccionada */}
            <AnimatePresence>
                {selectedTech && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: 10, height: 0 }}
                        className="mt-6 overflow-hidden rounded-2xl border border-cyan/30 bg-panel/80 p-5 backdrop-blur-xl shadow-glow"
                    >
                        <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2">
                                <img src={selectedTech.image} alt={selectedTech.title} className="h-8 w-8 object-contain" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-mono text-base font-semibold text-white">
                                        {selectedTech.title}
                                    </h4>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedTech(null)}
                                        aria-label="Cerrar detalle"
                                        className="text-xs font-mono text-slate-400 hover:text-white"
                                    >
                                        [esc / ✕]
                                    </button>
                                </div>
                                <p className="mt-1 text-sm leading-relaxed text-slate-300">
                                    {selectedTech.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MySkills;