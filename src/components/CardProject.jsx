import {useStateModal} from '../app/store-zustand'

const CardProject = ({ project }) => {
    const [setModalProject,setProjectSelected] = useStateModal(state=>[state.setModalProject, state.setProjectSelected])
    const OpenModal=()=>{
        setModalProject(true);
        setProjectSelected(project);
    }
    return (
        <div className="bg-white rounded-lg shadow-md mb-4">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{''}</p>
                <div className="flex flex-wrap">
                    {project.skills.map((tag, index) => (
                        <span
                            key={index}
                            className="mr-2 mb-2 px-2 py-1 bg-gray-300 text-gray-700 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <button
                    className="text-blue-500 hover:underline"
                    type="button"
                    onClick={()=>{OpenModal()}}
                >
                    Ver proyecto
                </button>
            </div>
        </div>
    );
}
export default CardProject