import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import footer from '../data/footer.json';
import { useLangProject } from '../app/store-zustand';

function MyFooter() {
    const [lang] = useLangProject(state => [state.lang]);
    return (
        <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 font-mono text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <p>{footer[lang].copyright || (lang === 'es' ? 'Diseñado y desarrollado por Felipe Mendoza' : 'Designed and developed by Felipe Mendoza')}</p>
                <p><FontAwesomeIcon icon={faEnvelope} className="mr-2 text-cyan" />felipe188.mendoza@gmail.com</p>
            </div>
        </footer>
    );
}

export default MyFooter;
