import {useStateModal} from '../app/store-zustand'
import { useLangProject } from '../app/store-zustand';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const CardProject = ({ project, index = 0 }) => {
    const [setModalProject, setProjectSelected] = useStateModal(state => [state.setModalProject, state.setProjectSelected]);
    const [lang] = useLangProject(state => [state.lang]);
    
    const OpenModal = () => {
        setModalProject(true);
        setProjectSelected(project);
    };

    const projectNumber = String(index + 1).padStart(2, '0');

    return (
        <motion.article 
            whileHover={{ y: -6 }} 
            onClick={OpenModal}
            className="glass group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:border-cyan/50 hover:shadow-glow focus-within:ring-2 focus-within:ring-cyan"
        >
            <div className="relative overflow-hidden bg-panel">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute top-4 right-4 rounded-full border border-white/10 bg-ink/70 px-3 py-1 font-mono text-[11px] text-cyan backdrop-blur-md">
                    {projectNumber} / CASE
                </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                    <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-cyan transition-colors">
                        {project.title}
                    </h3>
                    <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-slate-400">
                        {project.description}
                    </p>
                </div>

                <div>
                    <div className="mb-6 flex flex-wrap gap-1.5">
                        {project.skills?.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300 transition-colors group-hover:border-cyan/20"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="inline-flex items-center gap-2 font-mono text-xs font-medium text-cyan group-hover:text-white transition-colors">
                            {lang === 'es' ? 'Explorar caso de estudio' : 'Explore case study'} 
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                            {project.galery?.length || 1} {lang === 'es' ? 'capturas' : 'screens'}
                        </span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

CardProject.propTypes = { 
    project: PropTypes.shape({ 
        image: PropTypes.string, 
        title: PropTypes.string, 
        description: PropTypes.string, 
        skills: PropTypes.arrayOf(PropTypes.string),
        galery: PropTypes.array
    }).isRequired,
    index: PropTypes.number
};
export default CardProject;