import Container from '../components/Container'

/** ---------- Types ---------- */
type Experience = {
  role: string
  org: string
  location?: string
  dates: string
  bullets: string[]
}

type Education = {
  degree: string
  school: string
  location?: string
  dates: string
  gpa?: string
  minor?: string
  highlights?: string[]
}

/** ---------- Data (edit me) ---------- */
const experience: Experience[] = [
  {
    role: 'Teaching Assistant — CSE 1010 Intro to Computing',
    org: 'University of Connecticut',
    dates: 'Aug 2025 – Present',
    bullets: [
      'Teach foundational programming concepts and Python to first-year engineering students',
      'Host weekly labs; guide debugging strategies and best practices',
      'Grade exams, homework, and labs with constructive feedback',
    ],
  },
  {
    role: 'Research Assistant — El Gato Lab',
    org: 'University of Connecticut',
    dates: 'Summer 2024 – Present',
    bullets: [
      'Support applied ML/CS projects; code optimization and experiment automation in Python',
      'Assist with data cleaning, EDA, and reproducible scripts/notebooks',
    ],
  },
  {
    role: 'Cook',
    org: "Salty's Clam Shack, Westerly, RI",
    dates: '2022 – Present (Seasonal)',
    bullets: [
      'Coordinate high-volume prep/line ops with strong time management and teamwork',
      'Maintain food quality and safety standards during peak demand',
    ],
  },
]

const education: Education[] = [
  {
    degree: 'B.S. in Computer Science',
    school: 'University of Connecticut',
    dates: '2022 – 2026 (expected)',
    gpa: '4.00 / 4.00',
    minor: 'Mathmatics',
    highlights: [
      'Dean’s List (all semesters)',
      'Babbidge Scholar',
      'Relevant coursework: Algorithms, Systems, Databases, ML',
    ],
  },
]

/** ---------- Skill logos (swap to local /public/icons if you prefer) ---------- */
const skills = {
  frontend: [
    { name: 'React',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'HTML5',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3',         src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  ],
  backend: [
    { name: 'Python',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Flask',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Node.js',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'C++',          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'REST',         src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openapi/openapi-original.svg' },
  ],
  tools: [
    { name: 'Git',          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Vite',         src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'NumPy',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Linux',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'sci-kit learn',      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: 'PyTorch',src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"},
    { name: 'Docker',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  ],
}

/** ---------- Page ---------- */
export default function About() {
  return (
    <section className="bg-gradient-to-b from-[#12061f] via-[#18062c] to-[#220940]
      section-y">
      <Container>
        {/* Centered About intro (matches Projects header style) */}
        <header className="header-stack text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-violet-300">About Me</h2>
          <p className="mt-3 max-w-3xl mx-auto text-violet-200">
            I’m a computer science student focused on refining my skills in data analysis, machine learning, and software development.
          </p>
        </header>

        {/* Skills — standout card with glow and logos */}
        <div className="relative mb-16">
          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-600/30 via-violet-500/20 to-indigo-600/30" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-violet-200 mb-4 text-center">Skills</h3>

            <div className="grid gap-6 sm:grid-cols-3">
              {/* Frontend */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-3 text-lg font-semibold text-violet-200">Frontend</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {skills.frontend.map(s => (
                    <li key={s.name} className="flex items-center gap-2 text-slate-200">
                      <img src={s.src} alt={s.name} className="size-5" />
                      <span className="text-sm">{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-3 text-lg font-semibold text-violet-200">Backend</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {skills.backend.map(s => (
                    <li key={s.name} className="flex items-center gap-2 text-slate-200">
                      <img src={s.src} alt={s.name} className="size-5" />
                      <span className="text-sm">{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-3 text-lg font-semibold text-violet-200">Tools</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {skills.tools.map(s => (
                    <li key={s.name} className="flex items-center gap-2 text-slate-200">
                      <img src={s.src} alt={s.name} className="size-5" />
                      <span className="text-sm">{s.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold tracking-tight text-violet-200">Education</h3>
          <ol className="mt-6 space-y-6">
            {education.map((ed) => (
              <li key={`${ed.school}-${ed.degree}`} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{ed.degree}</p>
                    <p className="text-slate-300">
                      {ed.school}
                      {ed.location ? ` — ${ed.location}` : ''}
                    </p>
                  </div>
                  <p className="text-sm text-slate-400">{ed.dates}</p>
                </div>

                {(ed.gpa || (ed.highlights && ed.highlights.length > 0) || ed.minor) && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300 text-sm">
                    {ed.gpa && <li><strong>GPA:</strong> {ed.gpa}</li>}
                    {ed.highlights?.map((h, i) => <li key={i}>{h}</li>)}
                    {ed.minor && <li><strong>Minor:</strong> {ed.minor}</li>}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Work Experience */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold tracking-tight text-violet-200">Work Experience</h3>
          <ol className="stack">
            {experience.map((e) => (
              <li key={e.role} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{e.role}</p>
                    <p className="text-slate-300">
                      {e.org}
                      {e.location ? ` — ${e.location}` : ''}
                    </p>
                  </div>
                  <p className="text-sm text-slate-400">{e.dates}</p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 text-sm">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
