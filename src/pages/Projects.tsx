import Container from '../components/Container'
import { projects } from '../data/projects'
import { ArrowUpRight, Github } from 'lucide-react'

/**
 * Vertically stacked project sections.
 * - Each project is a full-width card with generous spacing.
 * - Image (if provided) sits on top for mobile, alongside content on larger screens.
 * - Subtle borders/backgrounds keep it minimal and modern.
 */
export default function Projects() {
  return (
    <section className="py-12">
      <Container>
        <header className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Checkout some of my projects displaying the skills I have been refining.

          </p>
        </header>

        {/* One-by-one vertical layout */}
        <ol className="space-y-10">
          {projects.map((p, idx) => (
            <li key={p.title} className="scroll-mt-24">
              <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm transition-colors hover:bg-white/[0.07] sm:p-8">
                {/* Top row: index + title */}
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-white/10 px-2 text-sm font-medium text-slate-300">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                </div>

                {/* Media + content */}
                <div className="grid gap-6 md:grid-cols-5 md:items-start">
                  {/* Image / placeholder */}
                  <div className="md:col-span-2">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/60">
                      {p.video ? (
                        // native HTML5 video (mp4/webm in /public/media or imported)
                        <video
                          src={p.video}
                          // show your image as the poster frame if provided
                          poster={p.image}
                          controls
                          playsInline
                          preload="metadata"
                          // keep the same aspect behavior as your image
                          className="aspect-video w-full h-auto"
                          // respect reduced motion
                          // autoPlay and loop are often annoying in grids, so leave off by default
                          // muted
                          // loop
                        />
                      ) : p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="aspect-video bg-[radial-gradient(40%_40%_at_50%_0%,rgba(99,102,241,0.25),transparent_70%)]" />
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-3">
                    <p className="text-slate-300">{p.description}</p>

                    {/* Tech chips */}
                    {p.tech?.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <li
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Links */}
                    {(p.links?.demo || p.links?.repo) && (
                      <div className="mt-6 flex flex-wrap gap-3 text-sm">
                        {p.links?.demo && (
                          <a
                            href={p.links.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-xl bg-accent-500 px-3 py-2 font-medium text-white transition-colors hover:bg-accent-600"
                          >
                            Live Demo <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                        {p.links?.repo && (
                          <a
                            href={p.links.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-xl bg-white/10 px-3 py-2 font-medium text-slate-100 transition-colors hover:bg-white/20"
                          >
                            <Github className="h-4 w-4" /> GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
