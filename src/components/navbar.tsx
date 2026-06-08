import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  nav-glass">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-bold text-lg">SM</a>

        {/* Theme toggle */}
        <button
          className="hover:text-teal-400"
          onClick={toggle}
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-soft hover:text-(--accent) transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-gray-900 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-700">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-soft hover:text-(--accent) transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}