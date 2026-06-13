import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileNav from '../components/layout/MobileNav'
import ProjectHero from '../components/project/ProjectHero'
import ProjectGallery from '../components/project/ProjectGallery'
import ProjectVideo from '../components/project/ProjectVideo'
import ProjectArchitecture from '../components/project/ProjectArchitecture'
import ProjectStack from '../components/project/ProjectStack'
import { projects } from '../data/projects'

const ProjectDetailPage = () => {
  const { id } = useParams()

  // 🔎 buscar proyecto según el id de la URL
  const project = projects.find(p => p.id === Number(id))

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      })
    }, observerOptions)

    document.querySelectorAll('section').forEach(section => {
      section.classList.add(
        'transition-all',
        'duration-1000',
        'opacity-0',
        'translate-y-8'
      )
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // ⚠️ fallback si no existe el proyecto
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-on-surface">
        Proyecto no encontrado
      </div>
    )
  }

  return (
    <>
      <Header />

      <main className="pt-24 pb-12">
        <ProjectHero project={project} />

        <ProjectGallery images={project.gallery} />

        <ProjectVideo videoImage={project.image} youtubeId={project.youtubeId} />

        <ProjectArchitecture
          architecture={project.architecture}
          description={project.longDescription}
        />

        <ProjectStack stack={project.stack} />
      </main>

      <Footer />
      <MobileNav />
    </>
  )
}

export default ProjectDetailPage