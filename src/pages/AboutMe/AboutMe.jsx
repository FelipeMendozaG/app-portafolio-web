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
                        <p className="mt-5 max-w-2xl leading-7 text-slate-500">{end}</p>
                        <div className="mt-9 grid max-w-lg grid-cols-3 gap-3">
                            {[['03+', lang === 'es' ? 'años de experiencia' : 'years experience'], ['12+', lang === 'es' ? 'proyectos entregados' : 'projects shipped'], ['16', lang === 'es' ? 'tecnologías' : 'technologies']].map(([value, label]) => <div key={label} className="border-l border-cyan/40 pl-3"><p className="font-mono text-2xl text-cyan">{value}</p><p className="mt-1 text-xs leading-4 text-slate-500">{label}</p></div>)}
                        </div>
                    </motion.div>
                </div>
            </div>
            <MySkills />
        </section>
    )
}
export default AboutMe;