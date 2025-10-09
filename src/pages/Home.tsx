import Container from '../components/Container'
import Button from '../components/Button'
import { Link } from 'react-router-dom'


export default function Home() {
return (
<section className="relative overflow-hidden">
<div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.20),transparent_70%)]" />
<Container>
<div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
<h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">Hey, I’m <span className="text-accent-400">Tim Robarge</span>.</h1>
<p className="max-w-2xl text-balance text-lg text-slate-300">A fourth-year undergraduate at UConn interested in the fusion of AI and Software Development.</p>
<div className="mt-8 flex gap-3">
<Link to="/projects"><Button>View Projects</Button></Link>
<Link to="/contact"><Button className="bg-white/10 text-slate-100 hover:bg-white/20">Contact Me</Button></Link>
</div>
</div>
</Container>
</section>
)
}