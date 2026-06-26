function Hero({ scrollTo }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-8 pb-16 pt-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <div className="mb-6 font-mono text-[13px] font-medium uppercase tracking-[0.2em] text-emerald-500">Web App Developer</div>
        <h1 className="mb-12 max-w-3xl font-serif text-5xl font-semibold leading-[1.08] tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
          Hammad Ali
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="cursor-pointer rounded-full bg-emerald-500 px-8 py-4 text-[15px] font-semibold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-600" onClick={() => scrollTo('projects')}>
            See the work
          </button>
          <button className="cursor-pointer rounded-full border border-zinc-800 px-8 py-4 text-[15px] font-semibold text-zinc-100 transition hover:border-emerald-500" onClick={() => scrollTo('contact')}>
            Get in touch
          </button>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full border border-emerald-500 px-8 py-4 text-[15px] font-semibold text-emerald-500 transition hover:bg-emerald-500/10">
           View Resume 
         </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;