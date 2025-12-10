import { SITE_CONFIG } from '@/lib/site-config';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="border-b border-[var(--border-color)]">
      <div className="container mx-auto flex max-w-3xl items-start justify-between px-4 py-4">
        <div className="flex-1 flex-col gap-2">
          <Link href="/">
            <span className="block text-3xl font-bold text-[var(--text-primary)]">
              {SITE_CONFIG.title}
            </span>
          </Link>
          <span className="block text-base text-[var(--text-secondary)]">
            {SITE_CONFIG.description}
          </span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
