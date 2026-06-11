import { Link } from 'react-router-dom'
import GlassCard from './GlassCard'
import TechBadge from './TechBadge'

const ProjectCard = ({ project }) => {
  return (
    <div className={`${project.colSpan} group cursor-pointer`}>
      <Link to={`/project/${project.id}`}>
        <GlassCard className="relative">
          <div className={`${project.aspect} relative`}>
            <img 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" 
              src={project.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-stack-lg">
              <span className="text-primary font-label-sm flex items-center gap-2">
                VER PROYECTO 
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </div>
        </GlassCard>
      </Link>
      <div className="mt-stack-md">
        <h3 className="font-display-lg text-headline-md text-on-surface">{project.title}</h3>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech, index) => (
            <TechBadge key={index}>{tech}</TechBadge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard