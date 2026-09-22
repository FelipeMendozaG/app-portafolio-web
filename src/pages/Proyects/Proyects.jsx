import { useLangProject } from "../../app/store-zustand";
import CardProject from "../../components/CardProject";
import ProjectList from '../../data/project';
import { motion } from 'framer-motion';
const Proyects = ()=>{
    const [lang] = useLangProject(state=>[state.lang]);
    const projects = ProjectList[lang];
    return (
        <section id="proyectos" className="section-shell scroll-mt-16">
            <div className="mb-10"><p className="eyebrow mb-3">03 / {lang === 'es' ? 'selección' : 'selected work'}</p>
                <h2 className="text-4xl font-semibold text-white sm:text-5xl">{lang === 'es' ? 'Proyectos destacados' : 'Selected projects'}</h2>
                <p className="mt-4 max-w-xl text-slate-400">{lang === 'es' ? 'Algunas soluciones que he diseñado, construido y llevado a producción.' : 'A few solutions I have designed, built, and shipped.'}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><CardProject project={project} /></motion.div>
                ))}
            </div>
        </section>
    )
}
export default Proyects;