import ImageForMe from '../assets/image-photo-me.png';
import { full_name, work } from '../data/profile.json';
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
const MyBanner = () => {
    return (
        <div className="bg-gray-200 px-8 flex flex-col md:flex-row items-center justify-center">
            <p className="font-bold md:w-1/2 md:pr-8 mt-10">
                <span className='block text-5xl lg:text-left sm:text-center'><Typewriter string={full_name} delay={80} /></span>
                <span className='block text-2xl lg:text-left sm:text-center mt-4'>{work}</span>
            </p>
            <img src={ImageForMe} alt="Felipe Mendoza" />
        </div>
    )
}
export default MyBanner;