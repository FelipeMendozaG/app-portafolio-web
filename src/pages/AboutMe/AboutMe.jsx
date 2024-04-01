import { useEffect } from 'react';
import { useLangProject } from '../../app/store-zustand';
import imageAboutMe from '../../assets/programador-trabajando-con-fondo-transparente.jpg';
import JsonAboutMe from '../../data/aboutme.json';
import MySkills from '../../components/MySkills';
const AboutMe = () => {
    const [lang] = useLangProject(state => [state.lang]);
    const {title,aboutme,end} = JsonAboutMe[lang];
    useEffect(() => {
        console.log(lang);
    }, []);
    return (
        <section id='acerca-de-felipe' className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="md:flex md:items-center justify-around">
                    <div className="md:w-80 md:pr-8 mb-4 md:mb-0">
                        <img
                            src={imageAboutMe}
                            alt="Tu foto de perfil"
                            className="w-full rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
                        <p className="text-gray-700 mb-6">
                            {aboutme}
                        </p>
                        <p className="text-gray-700">
                            {end}
                        </p>
                    </div>
                </div>
            </div>
            <MySkills />
        </section>
    )
}
export default AboutMe;