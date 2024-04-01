import { useLangProject } from "../../app/store-zustand";
import CardProject from "../../components/CardProject";
import ProjectList from '../../data/project';
const Proyects = ()=>{
    const [lang] = useLangProject(state=>[state.lang]);
    const projects = ProjectList[lang];
    return (
        <div id="proyectos" className="px-10">
            <div className="my-6">
                <h2 className="text-3xl font-semibold mb-4">{'Proyectos'}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <CardProject key={index} project={project} />
                ))}
            </div>
        </div>
    )
}
export default Proyects;