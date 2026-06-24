function ProjectCard({ project, index }) {
  return (
    <div className="cursor-pointer flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-[#0a0a0a] p-8 transition hover:-translate-y-1 hover:border-emerald-500">
      <div className="font-mono text-[13px] font-medium text-emerald-500">{String(index + 1).padStart(2, '0')}</div>
      <h3 className="font-serif text-2xl font-semibold text-zinc-100">{project.title}</h3>
      <p className="flex-1 text-sm leading-7 text-zinc-400">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, j) => (
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-500" key={j}>{tag}</span>
        ))}
      </div>
      <div className="mt-2 flex gap-4 border-t border-zinc-800 pt-4">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-100 transition hover:text-emerald-500">
            Live demo →
          </a>
        )}
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 transition hover:text-emerald-500">
          GitHub
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
