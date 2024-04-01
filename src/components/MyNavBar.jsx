import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyNav from '../data/nav'
import { CodeBracketSquareIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import {useLangProject} from '../app/store-zustand'

const MyNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [
        lang,
        spanish,
        inglish,
    ] = useLangProject(state=>[
        state.lang,
        state.spanish,
        state.inglish
    ])
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <nav className="bg-blue-500 p-4 fixed top-0 w-full z-50">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="text-white font-bold text-xl">
                        <CodeBracketSquareIcon className="mx-5 h-12 w-12 text-white-500" />
                    </Link>
                </div>
                <div className="hidden md:flex space-x-9">
                    {
                        MyNav.listnav[lang].map((item,index)=><Link key={index} to={'#'} onClick={() => scrollToSection(item.url)} className="text-white font-bold text-xl">{item.text}</Link>)
                    }
                    <div className='flex gap-4 grid-cols-2'>
                        <button onClick={()=>inglish()}>
                            <img src="/src/assets/flag_usa.png" className='w-8 h-7 rounded-md' alt="INGLES" />
                        </button>
                        <button onClick={()=>spanish()}>
                            <img src="/src/assets/flag_spain.jpg" className='w-8 h-7 rounded-md' alt="ESPAÑOL" />
                        </button>
                    </div>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleNavbar}
                        className="text-white focus:outline-none"
                    >
                            {isOpen ? (
                                <XMarkIcon className="mx-5  h-10 w-10 text-white-500" />
                            ) : (
                                <Bars3Icon className="mx-5  h-10 w-10 text-white-500" />
                            )}
                    </button>
                </div>
            </div>
            {/* Aquí añade el contenido del menú desplegable */}
            {isOpen && (
                <div className="mt-4 md:hidden">
                    {
                        MyNav.listnav[lang].map((item,index)=><Link key={index} to={'#'} onClick={()=>{scrollToSection(item.url);toggleNavbar();}} className="block text-white ml-10 my-4 text-xl font-bold">{item.text}</Link>)
                    }
                </div>
            )}
        </nav>
    );
};

export default MyNavBar;