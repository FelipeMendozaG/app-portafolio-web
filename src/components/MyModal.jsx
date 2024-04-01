import { useStateModal } from '../app/store-zustand'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';


const MyModal = () => {
    const [projectSelected, modal_project, setModalProject] = useStateModal(state => [state.projectSelected, state.modal_project, state.setModalProject])
    if (!modal_project) {
        return <></>
    }
    return <>
        <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white max-h-full md:max-h-3/4 w-full max-w-5xl rounded-lg shadow-lg opacity-100 transform transition-all overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 md:py-3">
                    <div className="flex items-center justify-center">
                        <div className="w-11/12">
                            <Swiper modules={[Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 3000 }} className="mySwiper">
                                {
                                    projectSelected.galery?.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={item} alt={projectSelected.title} className="max-w-full h-auto mx-auto"/>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <br />
                            <hr />
                            <h2 className='text-lg font-semibold mb-4'>Tecnologias utilizadas</h2>
                            <div >
                                {
                                    projectSelected.icons?.map((item, index) => (
                                        <FontAwesomeIcon key={index} icon={item} size='2xl' className='mx-2' />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="p-7">
                        <h2 className="text-lg font-semibold mb-4">{projectSelected.title.toUpperCase()}</h2>
                        <p className="text-sm text-gray-700">{projectSelected.descriptionModal}</p>
                        <br />
                        <hr />
                        <h2 className='text-lg font-semibold mb-4'>Repositorio</h2>
                        <a href={projectSelected.github} className='mt-4' target='_blank'>
                            <FontAwesomeIcon icon={faGithubSquare} size='3x' />
                        </a>
                    </div>
                </div>
                <button onClick={() => setModalProject(false)} className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </>
}
export default MyModal;