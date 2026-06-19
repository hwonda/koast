import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  links: NavLink[];
  base: string;
}

export default function Navigation({ links, base }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  function resolveHref(href: string) {
    if (href === '/') return base || '/';
    return `${base}${href}`;
  }

  return (
    <div className="flex items-center gap-2">
      {/* Dark mode toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={resolveHref(link.href)}
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 md:hidden">
          <div className="flex flex-col px-6 py-4 gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
