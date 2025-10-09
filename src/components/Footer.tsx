import Container from './Container'
import { Github, Linkedin, Mail } from 'lucide-react'


export default function Footer() {
return (
<footer className="border-t border-white/10 py-8">
<Container>
<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
<p className="text-sm text-slate-400">© {new Date().getFullYear()} Tim Robarge. All rights reserved.</p>
<div className="flex items-center gap-3 text-slate-300">
<a className="rounded-lg p-2 hover:bg-white/5 hover:text-white" href="https://github.com/t-robarge" target="_blank" rel="noreferrer" aria-label="GitHub">
<Github className="h-5 w-5" />
</a>
<a className="rounded-lg p-2 hover:bg-white/5 hover:text-white" href="https://www.linkedin.com/in/timothy-robarge/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
<Linkedin className="h-5 w-5" />
</a>
<a
  href="mailto:timothy.robarge@uconn.edu"
  className="rounded-lg p-2 hover:bg-white/5 hover:text-white"
  aria-label="Email"
>
  <Mail className="h-5 w-5" />
  <span className="sr-only">Email</span>
</a>
</div>
</div>
</Container>
</footer>
)
}