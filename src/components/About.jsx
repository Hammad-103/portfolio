function About() {
  return (
    <section className="border-t border-zinc-800 py-28" id="about">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-4 font-mono text-xs font-medium tracking-[0.08em] text-emerald-500">About</div>
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-zinc-100 md:sticky md:top-28 md:self-start lg:text-4xl">
            I don't just write code.<br />I close deals with it.
          </h2>
          <div>
            <p className="mb-5 text-base leading-7 text-zinc-400">
              I'm Hammad Ali, a web app developer based in Multan, Pakistan, and I build things that work the first time, every time.
            </p>
            <p className="mb-5 text-base leading-7 text-zinc-400">
             Modern JavaScript frameworks, clean architecture, and a sharp eye for performance... that's my toolkit, and I use it to build responsive, scalable web applications that actually move the needle for businesses. Clean code isn't a nice to have for me, it's the only way I operate. Pixel perfect frontends, optimized performance... that's the baseline, not the bonus.
            </p>
            <p className="mb-5 text-base leading-7 text-zinc-400">
              I don't chase trends, I solve problems. That's what gets me up in the morning.
            </p>
            <p className="text-base leading-7 text-zinc-400">
              So if you've got a project worth building, or you're looking for someone who delivers instead of just talking about it, let's talk. I don't lose. I just haven't started yet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
