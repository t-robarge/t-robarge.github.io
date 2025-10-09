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
    role: "Cook",
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
  // Add more entries if needed
]

/** ---------- Page ---------- */
export default function About() {
  return (
    <section className="py-16">
      <Container>
        {/* Centered About intro */}
        <div className="min-h-[60vh] grid place-items-center text-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-slate-300">
              I’m a computer science student focused on refining my skills in data analysis, machine learning, and software development.
            </p>

            {/* Skills split into Frontend / Backend / Tools */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3 text-left">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-3 text-lg font-semibold">Frontend</h3>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML • CSS • JavaScript</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-3 text-lg font-semibold">Backend</h3>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>Python • Flask</li>
                  <li>Node basics</li>
                  <li>REST APIs</li>
                  <li>C++</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-3 text-lg font-semibold">Tools</h3>
                <ul className="space-y-1 text-slate-300 text-sm">
                  <li>Git • GitHub</li>
                  <li>Vite</li>
                  <li>scikit-learn • NumPy • Pandas</li>
                  <li>Linux • Bash</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold tracking-tight">Education</h3>
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

                {(ed.gpa || (ed.highlights && ed.highlights.length > 0)) && (
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
          <h3 className="text-2xl font-semibold tracking-tight">Work Experience</h3>
          <ol className="mt-6 space-y-6">
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
