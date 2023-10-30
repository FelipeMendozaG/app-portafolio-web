import ImageForMe from '../assets/image-photo-me.png';
import profile from '../data/profile.json';
import Typewriter from "typewriter-effect";
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLangProject } from '../app/store-zustand';
const MyBanner = () => {
    const [
        lang
    ] = useLangProject(state=>[
        state.lang
    ]);
    const {full_name,work,github,linkedin} = profile[lang];
    const VisitGitHub = ()=>{
        let url = document.createElement('a')
        url.href = github
        url.target = '_blank'
        url.click()
        return ;
    }
    const VisitLinkedin = ()=>{
        let url = document.createElement('a');
        url.href = linkedin;
        url.target = '_blank'
        url.click()
        return ;
    }
    return (
        <div className="bg-gray-200 px-8 flex flex-col md:flex-row items-center justify-center">
            <div className="font-bold md:w-1/2 md:pr-8 mt-10">
                <span className='block text-6xl md:text-center lg:text-left sm:text-center'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(`${full_name} `)
                                .pauseFor(2000)
                                .start();
                        }}
                    />
                </span>
                <span className='block text-2xl lg:text-left sm:text-center mt-4'>{work}</span>
                <div className='flex gap-4 grid-cols-3 my-4'>
                    <button onClick={VisitGitHub}>
                        <FontAwesomeIcon icon={faGithubSquare} size='2xl' />
                    </button>
                    <button onClick={VisitLinkedin}>
                        <FontAwesomeIcon icon={faLinkedin} size='2xl' />
                    </button>
                </div>
            </div>
            <img src={ImageForMe} alt={full_name} />
        </div>
    )
}
export default MyBanner;