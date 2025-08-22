import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      const isDark = stored === 'dark';
      document.documentElement.classList.toggle('dark', isDark);
      setDark(isDark);
    }
  }, []);

  if (!mounted) return null;
  return (
    <button aria-label="Toggle theme" className="btn" onClick={toggle}>
      {dark ? '🌙' : '☀️'}
    </button>
  );
}


