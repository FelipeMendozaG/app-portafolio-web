import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import footer from '../data/footer.json';
import { useLangProject } from '../app/store-zustand';

function MyFooter() {
    const [lang] = useLangProject(state => [state.lang]);
    return (
        <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 font-mono text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <p>{footer[lang].copyright || (lang === 'es' ? 'Diseñado y desarrollado por Felipe Mendoza' : 'Designed and developed by Felipe Mendoza')}</p>
                <div className="flex flex-wrap items-center gap-6">
                    <Link to="/terminos-y-condiciones" className="transition-colors hover:text-cyan">
                        {lang === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions'}
                    </Link>
                    <p><FontAwesomeIcon icon={faEnvelope} className="mr-2 text-cyan" />felipe188.mendoza@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}

export default MyFooter;
