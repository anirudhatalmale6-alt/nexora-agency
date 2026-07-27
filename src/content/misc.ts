/**
 * Remaining editable content collections: tech stack, process steps,
 * testimonials, FAQs, "why us" points and company stats. Grouped in one file for
 * convenience — split into separate CMS collections in Milestone 2 as needed.
 */
import type { IconName } from '@/components/ui/Icon';

export interface TechItem {
  name: string;
  icon: IconName;
}
export const techStack: TechItem[] = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'next' },
  { name: 'Node.js', icon: 'node' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'OpenAI', icon: 'openai' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'AWS', icon: 'aws' },
  { name: 'PostgreSQL', icon: 'postgres' },
];

export interface ProcessStep {
  n: string;
  title: string;
  body: string;
}
export const processSteps: ProcessStep[] = [
  { n: '01', title: 'Discover', body: 'We map your goals, users and requirements into a focused, prioritized plan.' },
  { n: '02', title: 'Design', body: 'Premium UI/UX prototypes you can see and refine before a line of code ships.' },
  { n: '03', title: 'Build', body: 'Development in reviewable milestones, with regular demos and progress updates.' },
  { n: '04', title: 'Launch & scale', body: 'Deployment, documentation, and ongoing support as your product grows.' },
];

export interface WhyPoint {
  icon: IconName;
  title: string;
  body: string;
}
export const whyPoints: WhyPoint[] = [
  { icon: 'bolt', title: 'Performance-first engineering', body: 'Server-side rendering, CDN delivery and lean code for near-instant load times and top Lighthouse scores.' },
  { icon: 'shield', title: 'Security & reliability built in', body: 'Token-based auth, encrypted data and hardened APIs as standard — not an afterthought.' },
  { icon: 'grid', title: 'Modular, scalable architecture', body: 'Clean, well-documented code so new features — like payments — drop in later with no costly rewrites.' },
  { icon: 'chat', title: 'Clear, constant communication', body: 'Regular demos and progress updates in reviewable milestones — you always know exactly what’s next.' },
];

export interface Stat {
  value: string;
  label: string;
}
export const stats: Stat[] = [
  { value: '120+', label: 'Projects delivered' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '14', label: 'Countries served' },
  { value: '24/7', label: 'Support & monitoring' },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
export const testimonials: Testimonial[] = [
  { quote: 'Nexora rebuilt our platform from the ground up. It’s faster, cleaner, and adding new features is finally painless. Communication was outstanding throughout.', name: 'Sarah Lindqvist', role: 'COO, Vertex Labs' },
  { quote: 'They delivered our mobile app ahead of schedule and the AI automation now saves our team hours every day. A genuine technology partner.', name: 'Daniel Okafor', role: 'Founder, Quantech' },
  { quote: 'Professional, responsive and premium quality. The architecture they set up means we can scale without worrying about rewrites down the line.', name: 'Mia Rossi', role: 'Product Lead, BlueHarbor' },
];

export interface Faq {
  q: string;
  a: string;
}
export const faqs: Faq[] = [
  { q: 'What technologies do you build with?', a: 'We build on a modern, proven stack — Next.js and React for the frontend, Node.js for the backend, React Native or Flutter for mobile, and PostgreSQL for data. For AI work we use leading LLM providers. Everything is chosen for performance, security and long-term maintainability.' },
  { q: 'How does pricing and payment work?', a: 'We work in small, clearly-defined milestones. As each piece of work is completed and approved, a milestone is released — so you only ever pay for work that’s done, and you can see progress the whole way through.' },
  { q: 'Can you add payments or user accounts later?', a: 'Absolutely. We architect every project so features like payment processing, authentication and new modules can be switched on later without a costly rewrite. The foundation is built to scale from day one.' },
  { q: 'How long does a typical project take?', a: 'It depends on scope, but because we work in milestones you’ll see a live, reviewable version early and often. A polished marketing site can be days; a full platform is delivered in stages so value ships continuously.' },
  { q: 'Do you provide support after launch?', a: 'Yes. We provide deployment, documentation, bug fixes and ongoing support and monitoring so your product keeps running smoothly and can grow with your business.' },
];
