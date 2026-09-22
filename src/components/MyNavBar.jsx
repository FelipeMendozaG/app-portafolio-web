import { useEffect, useState } from 'react';
import flagusa from '../assets/flag_usa.png';
import flagesp from '../assets/flag_spain.jpg';
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
    const [activeSection, setActiveSection] = useState('/');
    const toggleNavbar = () => setIsOpen(!isOpen);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
        }, { rootMargin: '-35% 0px -55% 0px' });
        ['/', 'acerca-de-felipe', 'proyectos', 'contactame'].forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
    }, []);
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-ink/75 px-5 py-3 backdrop-blur-xl sm:px-8">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center gap-3 text-white">
                        <CodeBracketSquareIcon className="h-8 w-8 text-cyan" />
                        <span className="hidden font-mono text-sm text-slate-300 sm:block">felipe.dev</span>
                    </Link>
                </div>
                <div className="hidden items-center gap-7 md:flex">
                    {
                        MyNav.listnav[lang].map((item,index)=><Link key={index} to={'#'} onClick={() => scrollToSection(item.url)} className={`font-mono text-xs transition-colors ${activeSection === item.url ? 'text-cyan' : 'text-slate-400 hover:text-white'}`}>{item.text}</Link>)
                    }
                    <div className='flex gap-4 grid-cols-2'>
                        <button onClick={()=>inglish()}>
                            <img src={flagusa} className='h-5 w-7 rounded object-cover opacity-80 hover:opacity-100' alt="English" />
                        </button>
                        <button onClick={()=>spanish()}>
                            <img src={flagesp} className='h-5 w-7 rounded object-cover opacity-80 hover:opacity-100' alt="Español" />
                        </button>
                    </div>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleNavbar}
                        className="text-slate-300 focus:outline-none"
                    >
                            {isOpen ? (
                                <XMarkIcon className="h-8 w-8" />
                            ) : (
                                <Bars3Icon className="h-8 w-8" />
                            )}
                    </button>
                </div>
            </div>
            {/* Aquí añade el contenido del menú desplegable */}
            {isOpen && (
                <div className="mx-auto mt-4 max-w-6xl border-t border-white/10 pt-3 md:hidden">
                    {
                        MyNav.listnav[lang].map((item,index)=><Link key={index} to={'#'} onClick={()=>{scrollToSection(item.url);toggleNavbar();}} className="my-4 block font-mono text-sm text-slate-300">{item.text}</Link>)
                    }
                </div>
            )}
        </nav>
    );
};

export default MyNavBar;