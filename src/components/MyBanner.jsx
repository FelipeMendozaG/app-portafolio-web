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
        <section id='/' className="section-shell relative flex min-h-[720px] scroll-mt-20 items-center pt-32 overflow-hidden">
            {/* Iluminación ambiental de fondo */}
            <div className="absolute -top-24 left-1/2 -z-10 h-96 w-full max-w-4xl -translate-x-1/2 rounded-full bg-cyan/10 blur-[130px] pointer-events-none" />
            <div className="absolute top-1/2 -right-32 -z-10 h-80 w-80 rounded-full bg-violet/10 blur-[120px] pointer-events-none" />

            <div className="grid w-full items-center gap-14 md:grid-cols-[1.1fr_.9fr]">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
                    <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald/30 bg-emerald/10 px-3.5 py-1.5 font-mono text-xs text-emerald shadow-[0_0_20px_rgba(110,231,183,0.15)]">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald"></span>
                        </span>
                        <span>{lang === 'es' ? 'Disponible para nuevos proyectos' : 'Available for new projects'}</span>
                    </div>

                    <p className="eyebrow mb-5">&#47;&#47; {lang === 'es' ? 'ingeniería de software & audio dsp' : 'software engineering & audio dsp'}</p>
                    <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-tight sm:text-7xl">
                        <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">{full_name}</span>
                    </h1>
                    <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-400">
                        {lang === 'es'
                            ? 'Construyo productos digitales robustos, aplicaciones web/móviles y algoritmos de procesamiento de audio en tiempo real.'
                            : 'I build robust digital products, web/mobile applications, and real-time audio processing algorithms.'}
                    </p>

                    <div className="mt-6 flex max-w-md items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 font-mono text-xs text-slate-300 backdrop-blur-md shadow-inner">
                        <span className="text-emerald font-bold">$</span>
                        <Typewriter options={{ strings: [work], autoStart: true, loop: true, delay: 50, deleteSpeed: 25 }} />
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href="#contactame"
                            className="inline-flex items-center gap-2 rounded-xl bg-cyan px-5 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                        >
                            <span>{lang === 'es' ? 'Hablemos' : "Let's Talk"}</span>
                            <span className="text-xs">→</span>
                        </a>
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-white/[0.08]"
                        >
                            <FontAwesomeIcon icon={faGithubSquare} className="text-lg" />
                            <span>GitHub</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs text-slate-400" />
                        </a>
                        <a
                            href={pdfcv}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3.5 font-semibold text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan/50 hover:text-white"
                        >
                            <FontAwesomeIcon icon={faFileArrowDown} className="text-sm text-cyan" />
                            <span>{lang === 'es' ? 'Ver CV' : 'View CV'}</span>
                        </a>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-sm">
                    <div className="absolute -inset-5 rounded-3xl bg-cyan/15 blur-3xl pointer-events-none" />
                    <div className="glass relative overflow-hidden rounded-3xl p-3.5 shadow-card transition-transform duration-500 hover:scale-[1.01]">
                        <img src={ImageForMe} alt={full_name} className="aspect-[4/5] w-full rounded-2xl object-cover object-top" />
                        <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-ink/85 p-4 backdrop-blur-md shadow-lg">
                            <p className="font-mono text-xs text-cyan font-medium">{work}</p>
                            <p className="mt-1 flex items-center justify-between text-xs text-slate-300">
                                <span>Lima, Peru</span>
                                <span className="font-mono text-slate-400">© 2025-2026</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default MyBanner;