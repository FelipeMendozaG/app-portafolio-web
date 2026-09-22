import ImageForMe from '../assets/image-photo-me-2.png';
import profile from '../data/profile.json';
import Typewriter from 'typewriter-effect';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLangProject } from '../app/store-zustand';
import { motion } from 'framer-motion';
import { faArrowUpRightFromSquare, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import pdfcv from '../assets/cv/CV-FELIPE-MENDOZA-2024.pdf';
const MyBanner = () => {
    const [
        lang
    ] = useLangProject(state => [
        state.lang
    ]);
    const { full_name, work, github } = profile[lang];
    return (
        <section id='/' className="section-shell flex min-h-[700px] scroll-mt-20 items-center pt-32">
            <div className="grid w-full items-center gap-14 md:grid-cols-[1.1fr_.9fr]">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1 font-mono text-xs text-emerald">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald" /> {lang === 'es' ? 'Disponible para trabajar' : 'Open to work'}
                    </div>
                    <p className="eyebrow mb-5">&#47;&#47; {lang === 'es' ? 'desarrollador full-stack' : 'full-stack developer'}</p>
                    <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-tight sm:text-7xl"><span className="text-gradient">{full_name}</span></h1>
                    <p className="mt-7 max-w-xl text-lg text-slate-400">{lang === 'es' ? 'Construyo productos digitales robustos, APIs claras y experiencias que convierten ideas complejas en software útil.' : 'I build robust digital products, clear APIs, and experiences that turn complex ideas into useful software.'}</p>
                    <div className="mt-6 flex max-w-md items-center gap-3 rounded-lg border border-white/10 bg-black/20 px-4 py-3 font-mono text-xs text-slate-400"><span className="text-emerald">$</span><Typewriter options={{ strings: [work], autoStart: true, loop: true, delay: 55, deleteSpeed: 30 }} /></div>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-cyan px-4 py-3 font-semibold text-ink transition hover:-translate-y-1 hover:shadow-glow"><FontAwesomeIcon icon={faGithubSquare} /> GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" /></a>
                        <a href={pdfcv} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan/60"><FontAwesomeIcon icon={faFileArrowDown} /> {lang === 'es' ? 'Ver CV' : 'View CV'}</a>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-sm">
                    <div className="absolute -inset-5 rounded-3xl bg-cyan/10 blur-3xl" />
                    <div className="glass relative overflow-hidden rounded-2xl p-3 shadow-glow">
                        <img src={ImageForMe} alt={full_name} className="aspect-[4/5] w-full rounded-xl object-cover object-top" />
                        <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/10 bg-ink/80 p-4 backdrop-blur-md"><p className="font-mono text-xs text-slate-400">{work}</p><p className="mt-1 text-sm text-white">Lima, Peru <span className="text-cyan">/ 2024</span></p></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default MyBanner;