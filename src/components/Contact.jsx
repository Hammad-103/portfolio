function Contact() {
  return (
    <section className="border-t border-zinc-800 bg-zinc-900 py-28" id="contact">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-4 font-mono text-xs font-medium tracking-[0.08em] text-emerald-500">Contact</div>
        <h2 className="mb-10 font-serif text-4xl font-semibold leading-tight tracking-tight text-zinc-100 lg:text-5xl">
          Got a project worth building?<br />Let's talk.
        </h2>
        <div className="flex flex-col gap-6">
          <a href="mailto:hammadali2037@gmail.com" className="w-fit border-b border-transparent font-mono text-lg font-medium text-emerald-500 transition hover:border-emerald-500 sm:text-xl">
            hammadali2037@gmail.com
          </a>
          <div className="flex gap-6">
            <a href="https://github.com/Hammad-103" target="_blank" rel="noopener noreferrer" className="text-[15px] font-semibold text-zinc-400 transition hover:text-emerald-500">GitHub</a>
            <a href="https://www.linkedin.com/in/hammad-ali-x888/" target="_blank" rel="noopener noreferrer" className="text-[15px] font-semibold text-zinc-400 transition hover:text-emerald-500">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
