function Navbar({ scrollTo, scrolled }) {
  return (
<nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-zinc-800/80 bg-[#0a0a0a]/85 py-4 backdrop-blur-md' : 'border-b border-transparent bg-transparent py-6'}`}>      <div className="mx-auto flex max-w-6xl items-center justify-between px-8">
        <span className="font-serif text-lg font-semibold text-zinc-100">Hammad Ali</span>
        <div className="flex items-center gap-4 sm:gap-8">
          <button className="hidden cursor-pointer text-sm font-medium text-zinc-400 transition hover:text-zinc-100 sm:block" onClick={() => scrollTo('about')}>About</button>
          <button className="hidden cursor-pointer text-sm font-medium text-zinc-400 transition hover:text-zinc-100 sm:block" onClick={() => scrollTo('projects')}>Projects</button>
          <button className="hidden cursor-pointer text-sm font-medium text-zinc-400 transition hover:text-zinc-100 sm:block" onClick={() => scrollTo('skills')}>Skills</button>
          <button className="cursor-pointer rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-600" onClick={() => scrollTo('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
