/**
 * Central icon registry. Keeping all SVGs in one typed component means content
 * files can reference icons by a string key (`IconName`) with full type-safety,
 * and the CMS can offer a simple dropdown of icon names in Milestone 2.
 */
import type { SVGProps } from 'react';

export type IconName =
  | 'code' | 'mobile' | 'spark' | 'box' | 'grid' | 'globe'
  | 'bolt' | 'shield' | 'chat' | 'arrow' | 'check' | 'mail'
  | 'phone' | 'pin' | 'menu' | 'close' | 'sun' | 'moon'
  | 'react' | 'next' | 'node' | 'flutter' | 'openai' | 'typescript' | 'aws' | 'postgres';

const paths: Record<IconName, React.ReactNode> = {
  code: <><path d="M8 3H5a2 2 0 0 0-2 2v3m0 8v3a2 2 0 0 0 2 2h3m8-18h3a2 2 0 0 1 2 2v3m0 8v3a2 2 0 0 1-2 2h-3" /><path d="M9 12l2 2 4-4" /></>,
  mobile: <><rect x="7" y="2" width="10" height="20" rx="2" /><line x1="11" y1="18" x2="13" y2="18" /></>,
  spark: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10l2 2M19 5l-2 2M7 17l-2 2" /></>,
  box: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.3 7L12 12l8.7-5M12 22V12" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" /></>,
  bolt: <path d="M13 2L3 14h7l-1 8 10-12h-7z" />,
  shield: <><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></>,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M20 6L9 17l-5-5" />,
  mail: <><path d="M4 4h16v16H4z" /><path d="M22 6l-10 7L2 6" /></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L9 11a16 16 0 0 0 6 6l1.36-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  menu: <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>,
  close: <><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M19 5l-1.5 1.5m-11 11L5 19" /></>,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
  react: <><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" /><ellipse cx="12" cy="12" rx="10" ry="4.2" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" /></>,
  next: <><circle cx="12" cy="12" r="11" /><path d="M8 8v8M8 8l8 10M16 8v6" /></>,
  node: <><path d="M12 2l8.5 5v10L12 22l-8.5-5V7z" /><path d="M9.5 15c0 1 .8 1.6 2 1.6s2.1-.5 2.1-1.7c0-2.4-3.8-1-3.8-2.8 0-.7.6-1.1 1.6-1.1s1.6.4 1.7 1.2" /></>,
  flutter: <path d="M14.5 2L5 11.5l3 3L20.5 2zM14.5 11L9.5 16l5 5H20l-4.5-5 4.5-5z" fill="currentColor" stroke="none" />,
  openai: <><path d="M12 3.5c-1.4 0-2.6.7-3.3 1.8-1.5-.1-3 .6-3.8 2-1.4 2.4-.5 5.4 1.9 6.8-.4 1.5.1 3.1 1.4 4 2 1.4 4.9.9 6.3-1.1.6.1 1.2 0 1.8-.2 2.6-.8 4-3.6 3.2-6.2.6-1.4.5-3-.4-4.3-1.2-1.8-3.4-2.6-5.4-2.1-.9-.9-2.1-1.4-3.4-1.4z" /><path d="M12 7.5l3.5 2v3L12 14.5 8.5 12.5v-3z" /></>,
  typescript: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11h5M10.5 11v6M14 16.2c.4.5 1 .8 1.8.8 1 0 1.7-.5 1.7-1.4 0-1.6-3-1-3-2.6 0-.7.6-1.3 1.6-1.3.7 0 1.2.2 1.6.7" /></>,
  aws: <><path d="M6 10.5c0 .6.1 1 .3 1.4l.2.5c0 .1-.1.2-.2.3l-.6.4v.2l.7.6c.1.1.2.1.3 0 .3-.3.6-.6.8-1 .9 1 2.2 1.6 3.7 1.6 1.1 0 2-.3 2.6-.9.6.7 1.5 1 2.4.9" /><path d="M4 17c4.8 2.8 11.2 2.8 16 0M18 15.5c.4-1 .3-1.8.1-2-.5-.4-2 0-2 0" /></>,
  postgres: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></>,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
