import { useEffect, useState } from 'react';
import flagusa from '../assets/flag_usa.png';
import flagesp from '../assets/flag_spain.jpg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import MyNav from '../data/nav'
import { CodeBracketSquareIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useLangProject } from '../app/store-zustand'

const MyNavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [
        lang,
        spanish,
        inglish,
    ] = useLangProject(state => [
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
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                if (sectionId === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }, 100);
            return;
        }
        if (sectionId === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <nav aria-label="Navegación principal" className="fixed top-0 z-50 w-full border-b border-white/10 bg-ink/80 px-5 py-3.5 backdrop-blur-xl sm:px-8">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" onClick={() => scrollToSection('/')} className="group flex items-center gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/60 rounded-lg p-1">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 transition-colors group-hover:border-cyan/60 group-hover:bg-cyan/20">
                            <CodeBracketSquareIcon className="h-6 w-6 text-cyan transition-transform group-hover:scale-110" />
                        </div>
                        <span className="font-mono text-sm font-semibold tracking-tight text-slate-200 group-hover:text-white sm:block">
                            felipe<span className="text-cyan">.dev</span>
                        </span>
                    </Link>
                </div>

                {/* Enlaces Desktop */}
                <div className="hidden items-center gap-8 md:flex">
                    <div className="flex items-center gap-6">
                        {
                            MyNav.listnav[lang].map((item, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => scrollToSection(item.url)}
                                    className={`relative py-1 font-mono text-xs tracking-wider transition-colors focus-visible:outline-none focus-visible:text-cyan ${activeSection === item.url ? 'text-cyan font-medium' : 'text-slate-400 hover:text-white'}`}
                                >
                                    {item.text}
                                    {activeSection === item.url && (
                                        <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-cyan shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
                                    )}
                                </button>
                            ))
                        }
                    </div>

                    <div className="h-4 w-[1px] bg-white/10" />

                    {/* Selector de idioma Desktop */}
                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-1">
                        <button
                            type="button"
                            onClick={() => spanish()}
                            aria-label="Cambiar idioma a Español"
                            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-mono transition-all ${lang === 'es' ? 'bg-cyan/20 text-cyan border border-cyan/40 shadow-sm' : 'text-slate-400 hover:text-white opacity-70 hover:opacity-100'}`}
                        >
                            <img src={flagesp} className="h-3.5 w-5 rounded-sm object-cover" alt="Bandera de España" />
                            <span>ES</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => inglish()}
                            aria-label="Switch language to English"
                            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-mono transition-all ${lang === 'en' ? 'bg-cyan/20 text-cyan border border-cyan/40 shadow-sm' : 'text-slate-400 hover:text-white opacity-70 hover:opacity-100'}`}
                        >
                            <img src={flagusa} className="h-3.5 w-5 rounded-sm object-cover" alt="Flag of the USA" />
                            <span>EN</span>
                        </button>
                    </div>
                </div>

                {/* Botón hamburguesa Móvil */}
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        type="button"
                        onClick={toggleNavbar}
                        aria-expanded={isOpen}
                        aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-300 transition hover:border-cyan/40 hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                    >
                        {isOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Menú desplegable Móvil */}
            {isOpen && (
                <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-panel/95 p-5 backdrop-blur-2xl md:hidden">
                    <div className="flex flex-col space-y-3">
                        {
                            MyNav.listnav[lang].map((item, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => { scrollToSection(item.url); toggleNavbar(); }}
                                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-left font-mono text-sm transition-colors ${activeSection === item.url ? 'bg-cyan/15 text-cyan font-medium border border-cyan/30' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
                                >
                                    <span>{item.text}</span>
                                    <span className="text-xs text-slate-500">→</span>
                                </button>
                            ))
                        }
                    </div>

                    <div className="mt-5 border-t border-white/10 pt-4">
                        <p className="mb-2.5 font-mono text-xs uppercase tracking-wider text-slate-400">
                            {lang === 'es' ? 'Idioma / Language' : 'Language / Idioma'}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                type="button"
                                onClick={() => { spanish(); toggleNavbar(); }}
                                className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 font-mono text-xs transition ${lang === 'es' ? 'border-cyan bg-cyan/20 text-cyan font-bold' : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white'}`}
                            >
                                <img src={flagesp} className="h-4 w-5 rounded object-cover" alt="Español" />
                                <span>Español</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => { inglish(); toggleNavbar(); }}
                                className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 font-mono text-xs transition ${lang === 'en' ? 'border-cyan bg-cyan/20 text-cyan font-bold' : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white'}`}
                            >
                                <img src={flagusa} className="h-4 w-5 rounded object-cover" alt="English" />
                                <span>English</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default MyNavBar;