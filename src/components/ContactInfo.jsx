import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import contactinfo from '../data/contactinfo.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLangProject } from '../app/store-zustand';
import pdfcv from '../assets/cv/CV-FELIPE-MENDOZA-2024.pdf'
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
    const copyEmail = async () => { await navigator.clipboard.writeText('felipe188.mendoza@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 1800); };
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
        // Agrega la URL de descarga de tu CV
        window.open(pdfcv, '_blank');
    };

    return (
        <section id='contactame' className="section-shell scroll-mt-16 pt-12">
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-2xl border border-cyan/20 bg-cyan/[0.06] p-8 sm:p-12">
                <div className="relative z-10 max-w-2xl"><p className="eyebrow mb-4">04 / contact</p><h2 className="text-4xl font-semibold text-white sm:text-5xl">{lang === 'es' ? 'Trabajemos juntos.' : "Let's work together."}</h2><p className="mt-5 text-slate-400">{description}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <button onClick={handleEmailClick} className="rounded-lg bg-cyan px-4 py-3 font-semibold text-ink transition hover:-translate-y-1 hover:shadow-glow"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> {title}</button>
                        <button onClick={copyEmail} className="rounded-lg border border-white/15 px-4 py-3 font-mono text-xs text-slate-300 transition hover:border-cyan/50 hover:text-white">{copied ? (lang === 'es' ? '¡Copiado!' : 'Copied!') : 'felipe188.mendoza@gmail.com'}</button>
                    </div>
                    <div className="mt-8 flex gap-5 text-xl text-slate-400"><button aria-label="LinkedIn" onClick={handleLinkedInClick} className="transition hover:-translate-y-1 hover:text-cyan"><FontAwesomeIcon icon={faLinkedin} /></button><button aria-label="GitHub" onClick={handleGithubClick} className="transition hover:-translate-y-1 hover:text-cyan"><FontAwesomeIcon icon={faGithub} /></button><button aria-label="Download CV" onClick={handleDownloadCV} className="transition hover:-translate-y-1 hover:text-cyan"><FontAwesomeIcon icon={faFilePdf} /></button></div>
                </div>
                <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-cyan/20" /><div className="absolute -bottom-36 right-24 h-72 w-72 rounded-full border border-violet/20" />
            </motion.div>
        </section>
    );
};

export default ContactInfo;
