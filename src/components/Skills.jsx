import skills from '../data/skills'
import SkillBadge from './SkillBadge'

function Skills() {
  return (
    <section className="border-t border-zinc-800 py-28" id="skills">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-4 font-mono text-xs font-medium tracking-[0.08em] text-emerald-500">Skills</div>
        <h2 className="mb-12 font-serif text-3xl font-semibold tracking-tight text-zinc-100 lg:text-4xl">What I bring to the table</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillBadge skill={skill} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
