import {useStateModal} from '../app/store-zustand'
import { useLangProject } from '../app/store-zustand';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const CardProject = ({ project }) => {
    const [setModalProject,setProjectSelected] = useStateModal(state=>[state.setModalProject, state.setProjectSelected]);
    const [lang] = useLangProject(state => [state.lang]);
    const OpenModal=()=>{
        setModalProject(true);
        setProjectSelected(project);
    }
    return (
        <motion.article whileHover={{ y: -6 }} className="glass group h-full overflow-hidden rounded-2xl transition hover:border-cyan/40 hover:shadow-glow">
            <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            </div>
            <div className="p-6">
                <p className="mb-3 font-mono text-xs text-cyan">0{project.title.length % 9 + 1} / case study</p>
                <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mb-5 line-clamp-2 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                    {project.skills?.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <button
                    className="font-mono text-xs text-cyan transition hover:text-white"
                    type="button"
                    onClick={()=>{OpenModal()}}
                >
                    {lang === 'es' ? 'Ver detalles' : 'View details'} <span className="ml-2">-&gt;</span>
                </button>
            </div>
        </motion.article>
    );
}
CardProject.propTypes = { project: PropTypes.shape({ image: PropTypes.string, title: PropTypes.string, description: PropTypes.string, skills: PropTypes.arrayOf(PropTypes.string) }).isRequired };
export default CardProject