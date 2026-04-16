import * as React from 'react';

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Button({ className, variant = 'default', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition duration-300',
        variant === 'default' && 'bg-[var(--brand)] text-white shadow-[0_18px_40px_rgba(207,52,57,0.28)] hover:-translate-y-0.5 hover:bg-[#db4045]',
        variant === 'outline' && 'border border-[var(--line)] bg-transparent text-white hover:border-white/30 hover:bg-white/[0.06]',
        className
      )}
      {...props}
    />
  );
}

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] backdrop-blur-sm', className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6', className)} {...props} />;
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        'w-full rounded-2xl border border-[var(--line)] bg-black/20 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/35 focus:border-[rgba(207,52,57,0.6)] focus:bg-black/30 focus-visible:ring-2 focus-visible:ring-[rgba(207,52,57,0.2)]',
        props.className
      )}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        'min-h-[140px] w-full rounded-2xl border border-[var(--line)] bg-black/20 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/35 focus:border-[rgba(207,52,57,0.6)] focus:bg-black/30 focus-visible:ring-2 focus-visible:ring-[rgba(207,52,57,0.2)]',
        props.className
      )}
    />
  );
}
