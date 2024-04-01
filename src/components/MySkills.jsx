import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import skills from '../data/skills';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { useLangProject } from '../app/store-zustand';

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
            <div className="mx-auto w-full max-w-7xl my-8">
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
                            <div className="p-4 rounded-md">
                                <img
                                    src={tech.image}
                                    alt={tech.description}
                                    className="w-32 h-32 md:w-48 md:h-48 object-contain mb-2 cursor-pointer mx-auto"
                                    onClick={() => handleTechClick(tech.description)}
                                />
                                {activeDescription === tech.description && (
                                    <div className="bg-gray-200 p-4 rounded-md mt-2">
                                        <p className="text-sm">{tech.description}</p>
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default MySkills;