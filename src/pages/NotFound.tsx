import Container from '../components/Container'
import { Link } from 'react-router-dom'


export default function NotFound() {
return (
<section className="py-20">
<Container>
<div className="text-center">
<h2 className="mb-2 text-5xl font-semibold tracking-tight">404</h2>
<p className="mb-6 text-slate-300">Sorry, the page you’re looking for doesn’t exist.</p>
<Link to="/" className="rounded-xl bg-white/10 px-4 py-2 text-slate-100 transition-colors hover:bg-white/20">Go Home</Link>
</div>
</Container>
</section>
)
}