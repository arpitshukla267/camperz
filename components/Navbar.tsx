'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'How Hilink Works', href: '/howWeWork' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = ''; // Restore scroll
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center text-2xl font-bold text-black py-3">
          Hi<span className="text-green-500">links.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10 font-semibold">
          {navItems.map((item) => (
            <li key={item.name} className="pb-2">
              <Link
                href={item.href}
                className={`
                  inline-block
                  ${menuOpen ? 'border-p-2 border-black' : ''}
                  hover:border-green-600
                  transition
                  ${pathname === item.href ? 'text-green-600 border-green-600' : 'text-gray-600'}
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop login button */}
        <Link
          href="/login"
          className="hidden md:flex items-center gap-2 bg-black text-white px-5 py-3 rounded-3xl text-md font-semibold hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          aria-label="Login"
        >
          <User size={20} />
          Login
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md text-green-700 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-[70px] left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${
            menuOpen
              ? 'translate-y-0 opacity-100 pointer-events-auto'
              : '-translate-y-full opacity-0 pointer-events-none'
          }
        `}
      >
        <ul className="flex flex-col p-6 text-center text-gray-700 font-semibold">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className={`block py-4 px-4 rounded hover:bg-green-50 transition ${
                pathname === item.href ? 'text-green-600 font-bold' : ''
              } ${index !== navItems.length - 1 ? 'border-b border-gray-300' : ''}`}
            >
              <Link href={item.href} onClick={() => setMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 px-6 pb-6">
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="flex justify-center items-center gap-2 bg-black text-white py-3 rounded-3xl font-semibold hover:bg-gray-900 transition"
          >
            <User size={20} />
            Login
          </Link>
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className="text-green-700 border border-green-700 py-3 rounded-3xl font-semibold text-center hover:bg-green-100 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
