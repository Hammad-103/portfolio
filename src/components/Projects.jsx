import projects from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section className="border-t border-zinc-800 bg-zinc-900 py-28" id="projects">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-4 font-mono text-xs font-medium tracking-[0.08em] text-emerald-500">Projects</div>
        <h2 className="mb-12 font-serif text-3xl font-semibold tracking-tight text-zinc-100 lg:text-4xl">Selected work</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
