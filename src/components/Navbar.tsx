'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home',           href: '#hero' },
  { label: 'Our Story',      href: '#story' },
  { label: 'Products',       href: '#products' },
  { label: 'Health Benefits',href: '#health' },
  { label: 'Kashmir Roots',  href: '#kashmir' },
  { label: 'Craft',          href: '#craft' },
  { label: 'Contact',        href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('hero');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav ref={navRef} className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="#hero" className={styles.logo} onClick={() => handleNav('#hero')}>
          <span className={styles.logoIcon}>
            {/* Real 5-lobed Kashmiri Chinar Leaf SVG */}
            <svg width="36" height="36" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="leafGrad" x1="10" y1="5" x2="90" y2="95" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#E8B87A"/>
                  <stop offset="45%" stopColor="#B87333"/>
                  <stop offset="100%" stopColor="#8B4513"/>
                </linearGradient>
                <linearGradient id="stemGrad" x1="50" y1="70" x2="50" y2="105" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#C9A84C"/>
                  <stop offset="100%" stopColor="#8B6914"/>
                </linearGradient>
              </defs>
              {/* Central top lobe */}
              <path d="M50 8 C44 8, 34 16, 32 26 C30 36, 36 44, 50 48 C64 44, 70 36, 68 26 C66 16, 56 8, 50 8Z" fill="url(#leafGrad)"/>
              {/* Left upper lobe */}
              <path d="M32 26 C26 18, 14 18, 10 28 C6 38, 14 48, 28 50 C36 46, 38 38, 36 30 Z" fill="url(#leafGrad)" opacity="0.92"/>
              {/* Right upper lobe */}
              <path d="M68 26 C74 18, 86 18, 90 28 C94 38, 86 48, 72 50 C64 46, 62 38, 64 30 Z" fill="url(#leafGrad)" opacity="0.92"/>
              {/* Left lower lobe */}
              <path d="M28 50 C20 46, 8 50, 6 62 C4 72, 14 80, 30 76 C40 70, 42 60, 38 54 Z" fill="url(#leafGrad)" opacity="0.85"/>
              {/* Right lower lobe */}
              <path d="M72 50 C80 46, 92 50, 94 62 C96 72, 86 80, 70 76 C60 70, 58 60, 62 54 Z" fill="url(#leafGrad)" opacity="0.85"/>
              {/* Center body connecting lobes */}
              <path d="M36 30 C38 42, 40 56, 50 78 C60 56, 62 42, 64 30 C58 38, 50 42, 42 38 Z" fill="url(#leafGrad)" opacity="0.7"/>
              {/* Central vein */}
              <path d="M50 48 L50 95" stroke="url(#stemGrad)" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Left veins */}
              <path d="M50 60 L30 72" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
              <path d="M50 52 L28 58" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              {/* Right veins */}
              <path d="M50 60 L70 72" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
              <path d="M50 52 L72 58" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              {/* Stem curl */}
              <path d="M50 95 C48 100, 46 104, 50 106 C54 104, 52 100, 50 95Z" fill="url(#stemGrad)" opacity="0.7"/>
            </svg>
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoMain}>Healthcare</span>
            <span className={styles.logoSub}>Copper</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                className={`${styles.link} ${active === link.href.replace('#', '') ? styles.activeLink : ''}`}
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/+91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
          aria-label="Order on WhatsApp"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
          </svg>
          Order Now
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map((link) => (
          <button
            key={link.href}
            className={styles.mobileLink}
            onClick={() => handleNav(link.href)}
          >
            {link.label}
          </button>
        ))}
        <a
          href="https://wa.me/+91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileCta}
        >
          Order on WhatsApp
        </a>
      </div>
    </nav>
  );
}
