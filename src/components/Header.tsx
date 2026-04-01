'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 min-w-0">
            <Link href="/" className="flex items-center gap-3 min-w-0">
              <span className="text-sm sm:text-base font-bold text-[#1a4b8a] leading-tight">
                脱炭素電源地域貢献型<br className="sm:hidden" />投資促進事業 2026
              </span>
            </Link>
            <span className="shrink-0 bg-[#1a4b8a] text-white text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap">
              公募受付中
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#1a4b8a] transition-colors">
              TOP
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#1a4b8a] transition-colors"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                公募概要
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
                  {projects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/${p.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a4b8a] transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="text-xs text-[#1a4b8a] font-medium mr-2">{p.shortName}</span>
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="#news" className="text-sm font-medium text-gray-700 hover:text-[#1a4b8a] transition-colors">
              NEWS
            </a>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-red-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              ログアウト
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="メニューを開く"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-2">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#1a4b8a]"
              onClick={() => setMobileMenuOpen(false)}
            >
              TOP
            </Link>
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">公募概要</div>
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a4b8a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-xs text-[#1a4b8a] font-medium mr-1">{p.shortName}</span>
                {p.name}
              </Link>
            ))}
            <a
              href="#news"
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#1a4b8a]"
              onClick={() => setMobileMenuOpen(false)}
            >
              NEWS
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); handleLogout(); }}
              className="w-full text-left px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
            >
              ログアウト
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
