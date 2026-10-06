import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import footer from '../data/footer.json';
import { useLangProject } from '../app/store-zustand';

function MyFooter() {
    const [lang] = useLangProject(state => [state.lang]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-white/10 bg-ink/90 px-5 py-8 sm:px-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-5 font-mono text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-slate-300">
                        {footer[lang]?.copyright || (lang === 'es' ? '© 2025-2026 Diseñado y desarrollado por Felipe Mendoza' : '© 2025-2026 Designed and developed by Felipe Mendoza')}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">
                        Chepita Apps • High-Performance Web & Audio DSP
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-5 sm:gap-6">
                    <Link to="/terminos-y-condiciones" className="transition-colors hover:text-cyan">
                        {lang === 'es' ? 'Términos Web' : 'Web Terms'}
                    </Link>

                    <Link to="/terminos-chepita-afinador" className="transition-colors hover:text-[#00E676] flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00E676]" />
                        <span>{lang === 'es' ? 'Términos Chepita Afinador' : 'Chepita Tuner Terms'}</span>
                    </Link>

                    <a href="mailto:felipe188.mendoza@gmail.com" className="transition-colors hover:text-cyan flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-1.5 text-cyan" />
                        <span>felipe188.mendoza@gmail.com</span>
                    </a>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        aria-label="Volver arriba"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan"
                    >
                        <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default MyFooter;
