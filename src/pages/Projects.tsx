import Container from '../components/Container'
import { projects } from '../data/projects'
import { ArrowUpRight, Github } from 'lucide-react'

/**
 * Vertically stacked project sections with generous page padding.
 * - Top/bottom page padding via py to avoid crowding the viewport edges.
 * - Larger gaps between list items on md+.
 */
export default function Projects() {
  return (
    <section
      className="
        bg-gradient-to-b from-[#12061f] via-[#18062c] to-[#220940]
        pt-20 md:pt-28
        pb-24 md:pb-32
      "
    >
      <Container>
        <header className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-violet-300">
            Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-violet-200">
            Checkout some of my projects displaying the skills I have been refining.
          </p>
        </header>

        {/* One-by-one vertical layout */}
        <ol className="space-y-12 md:space-y-16">
          {projects.map((p, idx) => (
            <li key={p.title} className="scroll-mt-24">
              <article
                className="
                  rounded-3xl border border-white/10 bg-white/5
                  p-6 sm:p-8 md:p-10
                  shadow-sm transition-colors hover:bg-white/[0.07]
                "
              >
                {/* Top row: index + title */}
                <div className="mb-5 md:mb-6 flex items-baseline gap-3">
                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-white/10 px-2 text-sm font-medium text-slate-300">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                </div>

                {/* Media + content */}
                <div className="grid gap-6 md:grid-cols-5 md:gap-8 md:items-start">
                  <div className="md:col-span-2">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/60">
                      {p.video ? (
                        <video
                          src={p.video}
                          poster={p.image}
                          controls
                          playsInline
                          preload="metadata"
                          className="aspect-video w-full h-auto"
                        />
                      ) : p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="aspect-video bg-[radial-gradient(40%_40%_at_50%_0%,rgba(139,92,246,0.25),transparent_70%)]" />
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <p className="text-slate-300">{p.description}</p>

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

                    {(p.links?.demo || p.links?.repo) && (
                      <div className="mt-6 flex flex-wrap gap-3 text-sm">
                        {p.links?.demo && (
                          <a
                            href={p.links.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-xl bg-violet-600 px-3 py-2 font-medium text-white transition-colors hover:bg-violet-500"
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
