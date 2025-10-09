import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Container from './Container'
import { Menu, X } from 'lucide-react'


export default function NavBar() {
const [open, setOpen] = useState(false)


const linkBase = 'rounded-lg px-3 py-2 text-sm font-medium transition-colors'
const linkStyles = ({ isActive }: { isActive: boolean }) =>
[linkBase, isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'].join(' ')


return (
<header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
<Container>
<div className="flex h-16 items-center justify-between">
<Link to="/" className="font-semibold tracking-tight text-white">Portfolio</Link>


<nav className="hidden items-center gap-1 md:flex">
<NavLink to="/" className={linkStyles} end>Home</NavLink>
<NavLink to="/projects" className={linkStyles}>Projects</NavLink>
<NavLink to="/about" className={linkStyles}>About</NavLink>
<NavLink to="/contact" className={linkStyles}>Contact</NavLink>
</nav>


<button
className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-white/5 hover:text-white md:hidden"
aria-label="Toggle navigation"
onClick={() => setOpen(v => !v)}
>
{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
</button>
</div>


{open && (
<div className="grid gap-1 pb-4 md:hidden">
<NavLink to="/" className={linkStyles} end onClick={() => setOpen(false)}>Home</NavLink>
<NavLink to="/projects" className={linkStyles} onClick={() => setOpen(false)}>Projects</NavLink>
<NavLink to="/about" className={linkStyles} onClick={() => setOpen(false)}>About</NavLink>
<NavLink to="/contact" className={linkStyles} onClick={() => setOpen(false)}>Contact</NavLink>
</div>
)}
</Container>
</header>
)
}