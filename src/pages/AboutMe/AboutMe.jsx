import { useLangProject } from '../../app/store-zustand';
import imageAboutMe from '../../assets/programador-trabajando-con-fondo-transparente.jpg';
import JsonAboutMe from '../../data/aboutme.json';
import MySkills from '../../components/MySkills';
import { motion } from 'framer-motion';
const AboutMe = () => {
    const [lang] = useLangProject(state => [state.lang]);
    const {title,aboutme,end} = JsonAboutMe[lang];
    return (
        <section id='acerca-de-felipe' className="scroll-mt-16 border-t border-white/5">
            <div className="section-shell">
                <div className="grid items-center gap-12 md:grid-cols-[.75fr_1.25fr]">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-3">
                        <img
                            src={imageAboutMe}
                            alt="Felipe trabajando"
                            className="w-full rounded-xl object-cover"
                        />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <p className="eyebrow mb-4">01 / {lang === 'es' ? 'perfil' : 'profile'}</p>
                        <h2 className="mb-6 text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
                        <p className="max-w-2xl text-lg leading-8 text-slate-300">{aboutme}</p>
                        <p className="mt-5 max-w-2xl leading-7 text-slate-400">{end}</p>
                        
                        {/* Métricas destacadas con diseño de tarjetas glass */}
                        <div className="mt-9 grid max-w-xl grid-cols-1 gap-3.5 sm:grid-cols-3">
                            {[
                                ['03+', lang === 'es' ? 'Años de experiencia' : 'Years experience', 'border-cyan/30 text-cyan'],
                                ['12+', lang === 'es' ? 'Proyectos entregados' : 'Projects shipped', 'border-emerald/30 text-emerald'],
                                ['16+', lang === 'es' ? 'Tecnologías activas' : 'Core technologies', 'border-violet/30 text-violet']
                            ].map(([value, label, accent]) => (
                                <div 
                                    key={label} 
                                    className="glass group rounded-xl p-4 transition-all duration-300 hover:border-cyan/50 hover:bg-white/[0.06] hover:-translate-y-1"
                                >
                                    <p className={`font-mono text-3xl font-bold tracking-tight ${accent.split(' ')[1]}`}>
                                        {value}
                                    </p>
                                    <p className="mt-1 text-xs font-medium text-slate-400 group-hover:text-slate-300 leading-snug">
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            <MySkills />
        </section>
    )
}
export default AboutMe;