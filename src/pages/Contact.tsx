import Container from '../components/Container'

export default function Contact() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#12061f] via-[#18062c] to-[#220940]">
      <Container>
        {/* Centered header to match the site */}
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-violet-300">Contact</h2>
          <p className="mt-3 max-w-2xl mx-auto text-violet-200">
            Prefer email? Use the form below or reach me on LinkedIn/GitHub from the footer.
          </p>
        </header>

        {/* Simple, readable form card (no glow) */}
        <div className="max-w-2xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <form
            action="mailto:you@example.com"
            method="post"
            encType="text/plain"
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/60"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/60"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-violet-500/60 focus:border-violet-500/60"
                placeholder="Say hi..."
              />
            </div>

            <div className="pt-2">
              <button
                className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-4 py-2 font-medium text-white transition-colors hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400/70"
              >
                Send
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Submitting opens your email client with the message prefilled.
            </p>
          </form>
        </div>
      </Container>
    </section>
  )
}
