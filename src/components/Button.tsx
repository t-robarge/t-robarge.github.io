import { ButtonHTMLAttributes } from 'react'
import { cn } from '../utils/cn'


export default function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
return (
<button
className={cn(
'inline-flex items-center gap-2 rounded-xl bg-accent-500 px-4 py-2 text-sm font-medium text-white',
'transition-colors hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60',
className
)}
{...props}
/>
)
}