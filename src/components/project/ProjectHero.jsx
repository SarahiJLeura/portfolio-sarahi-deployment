import { Link } from 'react-router-dom'
import TechBadge from '../common/TechBadge'

const ProjectHero = ({ project }) => {
  const allTech = Object.values(project.stack)
  .flat()
  .map(t => t.name)
  return (
    <section className="px-6 md:px-gutter max-w-container-max mx-auto py-12">
      <div className="flex flex-col gap-6">
        <Link to="/" className="flex items-center gap-2 text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span className="text-label-sm">PROYECTOS</span>
        </Link>
        <div className="flex flex-col gap-4">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:text-display-lg text-on-surface leading-none">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {allTech.map((tech, index) => (
              <TechBadge key={index}>{tech}</TechBadge>
            ))}
          </div>
        </div>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mt-4">
          {project.longDescription}
        </p>
        <div className="flex gap-4 mt-4">
          <a 
            className="bg-on-surface text-on-primary px-8 py-4 rounded-full font-label-sm flex items-center gap-2 hover:shadow-lg transition-all group" 
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">code</span>
            💻 Repositorio
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectHero