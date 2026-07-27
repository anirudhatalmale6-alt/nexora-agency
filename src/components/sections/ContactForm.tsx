'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { Icon } from '@/components/ui/Icon';
import type { IconName } from '@/components/ui/Icon';
import { ButtonAction } from '@/components/ui/Button';

const budgets = ['Under $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+'];
const timelines = ['ASAP', '1 – 4 weeks', '1 – 3 months', '3 months+', 'Just exploring'];

const contactInfo: { icon: IconName; label: string; value: string }[] = [
  { icon: 'mail', label: 'Email', value: site.email },
  { icon: 'phone', label: 'Phone', value: site.phone },
  { icon: 'pin', label: 'Working globally', value: site.location },
];

/**
 * Premium contact form with budget + timeline fields.
 *
 * NOTE: submission is currently handled client-side (demo). In a later milestone
 * this posts to an API route / CRM / email service — the field names already map
 * to a typical lead object, so wiring a backend is a drop-in change.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-brand/[0.06] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Get in touch
        </span>
        <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.6rem)]">Book your free consultation</h2>
        <p className="mt-3 text-muted">
          Share a few details about your project and we’ll get back to you with a plan, timeline and next steps — usually within one business day.
        </p>
        <div className="mt-7 flex flex-col gap-5">
          {contactInfo.map((c) => (
            <div key={c.label} className="flex items-start gap-3.5">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-line-2 bg-brand/10">
                <Icon name={c.icon} className="h-5 w-5 text-brand-2" />
              </span>
              <div>
                <b className="text-[14.5px]">{c.label}</b>
                <p className="text-[13.5px] text-muted">{c.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[22px] border border-line bg-gradient-to-b from-surface to-bg-2 p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name"><input required name="name" placeholder="Jane Doe" className={inputCls} /></Field>
          <Field label="Work email"><input required type="email" name="email" placeholder="jane@company.com" className={inputCls} /></Field>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field label="Company"><input name="company" placeholder="Company name" className={inputCls} /></Field>
          <Field label="Service needed">
            <select name="service" className={selectCls}>
              {services.map((s) => <option key={s.slug}>{s.title}</option>)}
              <option>Other</option>
            </select>
          </Field>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Field label="Project budget">
            <select name="budget" className={selectCls}>{budgets.map((b) => <option key={b}>{b}</option>)}</select>
          </Field>
          <Field label="Timeline">
            <select name="timeline" className={selectCls}>{timelines.map((t) => <option key={t}>{t}</option>)}</select>
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Project details">
            <textarea name="details" rows={4} placeholder="Tell us a bit about what you’re looking to build..." className={`${inputCls} min-h-[110px] resize-y`} />
          </Field>
        </div>
        <ButtonAction type="submit" disabled={sent} className="mt-5 w-full disabled:opacity-80">
          {sent ? 'Thank you — we’ll be in touch shortly!' : 'Book my consultation'}
        </ButtonAction>
        <p className="mt-2.5 text-center text-xs text-muted-2">We’ll never share your details. Free consultation, no obligation.</p>
      </form>
    </div>
  );
}

const inputCls =
  'w-full rounded-xl border border-line bg-bg-2 px-4 py-3 text-[14.5px] text-content placeholder:text-muted-2 transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25';
const selectCls = `${inputCls} appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239aa6c2%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22/%3E%3C/svg%3E')] bg-[right_14px_center] bg-no-repeat pr-10`;

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-muted">{label}</span>
      {children}
    </label>
  );
}
