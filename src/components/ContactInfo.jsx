import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import contactinfo from '../data/contactinfo.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLangProject } from '../app/store-zustand';
import pdfcv from '../assets/cv/CV-FELIPE-MENDOZA-2024.pdf';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
    const [
        lang
    ] = useLangProject(state => [
        state.lang
    ]);
    const { title, description } = contactinfo[lang];
    const [copied, setCopied] = useState(false);
    
    const copyEmail = async () => { 
        await navigator.clipboard.writeText('felipe188.mendoza@gmail.com'); 
        setCopied(true); 
        setTimeout(() => setCopied(false), 2000); 
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:felipe188.mendoza@gmail.com';
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/felipe-mendoza-gutierrez-10a86b1bb/', '_blank');
    };

    const handleGithubClick = () => {
        window.open('https://github.com/FelipeMendozaG', '_blank');
    };

    const handleDownloadCV = () => {
        window.open(pdfcv, '_blank');
    };

    return (
        <section id='contactame' className="section-shell scroll-mt-16 pt-12">
            <motion.div 
                initial={{ opacity: 0, y: 18 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="relative overflow-hidden rounded-3xl border border-cyan/30 bg-gradient-to-br from-panel/90 via-ink/90 to-panel/80 p-8 sm:p-12 backdrop-blur-xl shadow-glow"
            >
                <div className="relative z-10 max-w-2xl">
                    <p className="eyebrow mb-4">04 / contact & hiring</p>
                    <h2 className="text-4xl font-semibold text-white sm:text-5xl">
                        {lang === 'es' ? 'Trabajemos juntos.' : "Let's work together."}
                    </h2>
                    <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                        {description}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <button 
                            type="button"
                            onClick={handleEmailClick} 
                            className="inline-flex items-center gap-2 rounded-xl bg-cyan px-5 py-3.5 font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                        >
                            <FontAwesomeIcon icon={faEnvelope} /> 
                            <span>{title}</span>
                        </button>

                        <button 
                            type="button"
                            onClick={copyEmail} 
                            aria-label="Copiar correo electrónico al portapapeles"
                            className={`inline-flex items-center gap-2.5 rounded-xl border px-4 py-3.5 font-mono text-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                                copied 
                                    ? 'border-emerald/60 bg-emerald/10 text-emerald' 
                                    : 'border-white/15 bg-white/[0.03] text-slate-300 hover:border-cyan/50 hover:bg-white/[0.08] hover:text-white'
                            }`}
                        >
                            <FontAwesomeIcon icon={copied ? faCheck : faCopy} className={copied ? 'text-emerald' : 'text-cyan'} />
                            <span>{copied ? (lang === 'es' ? '¡Correo copiado!' : 'Email copied!') : 'felipe188.mendoza@gmail.com'}</span>
                        </button>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
                        <span className="font-mono text-xs uppercase tracking-wider text-slate-400 mr-2">
                            {lang === 'es' ? 'Conecta conmigo:' : 'Connect with me:'}
                        </span>

                        <button 
                            type="button"
                            aria-label="Perfil de LinkedIn de Felipe Mendoza" 
                            onClick={handleLinkedInClick} 
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                        </button>

                        <button 
                            type="button"
                            aria-label="Perfil de GitHub de Felipe Mendoza" 
                            onClick={handleGithubClick} 
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                        >
                            <FontAwesomeIcon icon={faGithub} className="text-lg" />
                        </button>

                        <button 
                            type="button"
                            aria-label="Descargar currículum en formato PDF" 
                            onClick={handleDownloadCV} 
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                        >
                            <FontAwesomeIcon icon={faFilePdf} className="text-lg" />
                        </button>
                    </div>
                </div>

                {/* Figuras ambientales decorativas */}
                <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-cyan/20 blur-sm pointer-events-none" />
                <div className="absolute -bottom-36 right-24 h-72 w-72 rounded-full border border-violet/20 blur-sm pointer-events-none" />
            </motion.div>
        </section>
    );
};

export default ContactInfo;
