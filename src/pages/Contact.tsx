import Container from '../components/Container'


export default function Contact() {
return (
<section className="py-12">
<Container>
<h2 className="mb-6 text-3xl font-semibold tracking-tight">Contact</h2>
<p className="mb-8 max-w-2xl text-slate-300">Prefer email? Use the form below or reach me on LinkedIn/GitHub from the footer.</p>


<form action="mailto:you@example.com" method="post" encType="text/plain" className="max-w-xl space-y-4">
<div>
<label className="mb-1 block text-sm text-slate-300" htmlFor="name">Name</label>
<input id="name" name="name" required className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-accent-500" placeholder="Your name" />
</div>
<div>
<label className="mb-1 block text-sm text-slate-300" htmlFor="email">Email</label>
<input id="email" name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-accent-500" placeholder="you@example.com" />
</div>
<div>
<label className="mb-1 block text-sm text-slate-300" htmlFor="message">Message</label>
<textarea id="message" name="message" rows={5} required className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-accent-500" placeholder="Say hi..." />
</div>
<button className="rounded-xl bg-accent-500 px-4 py-2 font-medium text-white transition-colors hover:bg-accent-600">Send</button>
</form>
</Container>
</section>
)
}