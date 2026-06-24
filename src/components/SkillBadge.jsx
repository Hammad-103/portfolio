function SkillBadge({ skill }) {
  return (
    <div className="flex min-h-28 flex-col items-start justify-between gap-3 rounded-2xl border border-zinc-800 p-5">
      <span className="font-serif text-xl font-medium text-zinc-100 sm:text-2xl">{skill.name}</span>
      <span className="font-mono text-xs uppercase tracking-[0.08em] text-emerald-500">{skill.level}</span>
    </div>
  )
}

export default SkillBadge
