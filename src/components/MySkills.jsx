import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import skills from '../data/skills';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { useLangProject } from '../app/store-zustand';
import { motion } from 'framer-motion';

const MySkills = () => {
    const [
        lang
    ] = useLangProject(state => [
        state.lang
    ]);
    const MySkills = skills[lang];
    const [activeDescription, setActiveDescription] = useState('');

    const handleTechClick = (description) => {
        setActiveDescription(description);
    };

    return (
        <>
        <br />
            <div className="mx-auto mt-20 w-full max-w-6xl">
                <div className="mb-7 flex items-end justify-between"><div><p className="eyebrow mb-3">02 / stack</p><h3 className="text-2xl font-semibold text-white">{lang === 'es' ? 'Herramientas que uso' : 'Tools I use'}</h3></div><span className="font-mono text-xs text-slate-500">{MySkills?.length} technologies</span></div>
                <Swiper
                    breakpoints={{
                        430: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    className="mySwiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {MySkills?.map((tech, index) => (
                        <SwiperSlide key={index}>
                            <motion.div whileHover={{ y: -5 }} className="glass group min-h-52 rounded-xl p-5 transition hover:border-cyan/40 hover:shadow-glow">
                                <img
                                    src={tech.image}
                                    alt={tech.description}
                                    className="mx-auto mb-4 h-24 w-24 cursor-pointer object-contain transition duration-300 group-hover:scale-110"
                                    onClick={() => handleTechClick(tech.description)}
                                />
                                {activeDescription === tech.description && (
                                    <div className="mt-2">
                                        <p className="text-xs leading-5 text-slate-400">{tech.description}</p>
                                    </div>
                                )}
                                <p className="font-mono text-sm text-slate-200">{tech.title}</p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default MySkills;