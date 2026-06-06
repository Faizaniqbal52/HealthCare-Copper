'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import HeroScene from './HeroScene';

export default function Hero() {
  const headingRef  = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const badgeRef    = useRef<HTMLDivElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const scrollRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [badgeRef, headingRef, subRef, ctaRef, scrollRef];
    elements.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = '0';
        ref.current.style.transform = 'translateY(40px)';
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = `opacity 1s cubic-bezier(0,0,0.2,1) ${i * 0.18}s, transform 1s cubic-bezier(0,0,0.2,1) ${i * 0.18}s`;
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }, 200);
      }
    });
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* Background image with overlay */}
      <div className={styles.bgImage}>
        <Image
          src="/hero-bg.png"
          alt="Elderly Kashmiri grandfather handing a copper Samovar to his granddaughter"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
        <div className={styles.bgOverlay} />
        <div className={styles.bgGradient} />
      </div>

      {/* Floating Chinar leaves */}
      <div className={styles.leaves} aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <ChinaLeaf key={i} index={i} />
        ))}
      </div>

      {/* 3D Canvas */}
      <div className={styles.canvasWrap}>
        <HeroScene />
      </div>

      {/* Hero Content */}
      <div className={styles.content}>
        <div ref={badgeRef} className={styles.badge}>
          <span className="section-label">Since Generations · Kashmir</span>
        </div>

        <h1 ref={headingRef} className={styles.heading}>
          Crafted in Kashmir.
          <br />
          <span className="shimmer-text">Carried Across</span>
          <br />
          Centuries.
        </h1>

        <p ref={subRef} className={styles.sub}>
          Every piece of copper we craft carries the soul of the Valley —
          hand-engraved by master artisans using techniques passed down through generations.
          From our workshop in Kashmir to your home.
        </p>

        <div ref={ctaRef} className={styles.ctas}>
          <a
            href="#products"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            Explore Collection
          </a>
          <a
            href="#story"
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Our Heritage
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div ref={scrollRef} className={styles.stats}>
          {[
            { value: '500+', label: 'Happy Families' },
            { value: '99.9%', label: 'Pure Copper' },
            { value: '100+', label: 'Unique Designs' },
            { value: '50+', label: 'Years of Craft' },
          ].map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

function ChinaLeaf({ index }: { index: number }) {
  const sizes  = [18, 22, 14, 26, 16, 20, 12, 24];
  const lefts  = [8, 18, 32, 52, 65, 75, 85, 92];
  const delays = [0, 1.2, 2.4, 0.6, 3, 1.8, 2.1, 0.3];
  const durs   = [7, 6, 8, 5.5, 7.5, 6.5, 9, 5];

  const size  = sizes[index];
  const left  = lefts[index];
  const delay = delays[index];
  const dur   = durs[index];

  return (
    <svg
      className={styles.leaf}
      style={{
        left: `${left}%`,
        bottom: `${15 + index * 8}%`,
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        animationDuration: `${dur}s`,
      }}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M30 5 C30 5, 10 18, 12 32 C14 44, 28 48, 30 55 C32 48, 46 44, 48 32 C50 18, 30 5, 30 5Z"
        fill="rgba(184,115,51,0.25)"
        stroke="rgba(201,168,76,0.3)"
        strokeWidth="0.5"
      />
      <path d="M30 55 L30 38" stroke="rgba(201,168,76,0.3)" strokeWidth="1" strokeLinecap="round"/>
      <path d="M30 45 L22 38" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" strokeLinecap="round"/>
      <path d="M30 45 L38 38" stroke="rgba(201,168,76,0.2)" strokeWidth="0.5" strokeLinecap="round"/>
    </svg>
  );
}
