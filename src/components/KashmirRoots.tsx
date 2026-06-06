'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './KashmirRoots.module.css';

export default function KashmirRoots() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !parallaxRef.current) return;
      const rect   = sectionRef.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      const offset = center * 0.25;
      parallaxRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="kashmir" ref={sectionRef} className={styles.kashmir}>
      {/* Parallax background */}
      <div ref={parallaxRef} className={styles.parallaxBg}>
        <Image
          src="/kashmir-flatlay.png"
          alt="Traditional Kashmiri copper utensils arranged on a handmade carpet with saffron"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Overlays */}
      <div className={styles.overlay} />
      <div className={styles.gradientTop} />
      <div className={styles.gradientBottom} />

      {/* Floating decorative Chinar */}
      <div className={styles.decorChinar} aria-hidden="true">
        <svg width="220" height="220" viewBox="0 0 60 60" fill="none" opacity="0.06">
          <path d="M30 5 C30 5, 10 18, 12 32 C14 44, 28 48, 30 55 C32 48, 46 44, 48 32 C50 18, 30 5, 30 5Z"
            fill="#B87333" />
        </svg>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.inner}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Kashmir Roots</span>

          <h2 className={styles.heading}>
            Born in the Heart<br />of <span className="text-copper">the Valley</span>
          </h2>

          <p className={styles.body}>
            Nestled between the Himalayas and the Pir Panjal range, Kashmir has been a crucible 
            of art and craft for over five centuries. The copperware tradition — known as <em>Traam Kaari</em> — 
            was brought to the Valley by Persian artisans during the Sultanate era and has since 
            fused deeply with Kashmiri identity.
          </p>

          <p className={styles.body}>
            Every morning in a Kashmiri home begins with the sound of a copper Samovar heating 
            on the stove. Every feast is served on a Traam. Every child grows up knowing the 
            warmth of copper in their hands. This is not just craft. This is life.
          </p>

          <div className={styles.pillars}>
            {/* Srinagar — Mosque dome silhouette */}
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>
                <svg width="44" height="44" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="pg1" x1="10" y1="5" x2="70" y2="75" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#E8B87A"/><stop offset="100%" stopColor="#B87333"/>
                    </linearGradient>
                  </defs>
                  {/* Main dome */}
                  <path d="M40 8 C24 8, 14 22, 14 36 L66 36 C66 22, 56 8, 40 8Z" fill="url(#pg1)"/>
                  {/* Finial spike */}
                  <line x1="40" y1="8" x2="40" y2="2" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="40" cy="2" r="2" fill="#C9A84C"/>
                  {/* Drum / base of dome */}
                  <rect x="18" y="36" width="44" height="6" rx="2" fill="url(#pg1)" opacity="0.85"/>
                  {/* Side minarets */}
                  <rect x="10" y="22" width="6" height="20" rx="3" fill="url(#pg1)" opacity="0.7"/>
                  <path d="M10 22 C10 17, 16 17, 16 22Z" fill="#C9A84C"/>
                  <rect x="64" y="22" width="6" height="20" rx="3" fill="url(#pg1)" opacity="0.7"/>
                  <path d="M64 22 C64 17, 70 17, 70 22Z" fill="#C9A84C"/>
                  {/* Base */}
                  <rect x="6" y="42" width="68" height="5" rx="1" fill="url(#pg1)" opacity="0.5"/>
                  {/* Arch windows */}
                  <path d="M34 36 Q34 30, 40 30 Q46 30, 46 36Z" fill="#8B4513" opacity="0.4"/>
                  <path d="M17 36 Q17 31, 21 31 Q25 31, 25 36Z" fill="#8B4513" opacity="0.3"/>
                  <path d="M55 36 Q55 31, 59 31 Q63 31, 63 36Z" fill="#8B4513" opacity="0.3"/>
                </svg>
              </span>
              <span className={styles.pillarLabel}>Srinagar</span>
              <span className={styles.pillarDesc}>Our home in the Valley</span>
            </div>

            {/* Persian Roots — Arabesque medallion */}
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>
                <svg width="44" height="44" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="pg2" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#E8B87A"/><stop offset="100%" stopColor="#B87333"/>
                    </linearGradient>
                  </defs>
                  {/* Outer ring */}
                  <circle cx="40" cy="40" r="34" stroke="url(#pg2)" strokeWidth="2" fill="none"/>
                  {/* 8-petal arabesque flower */}
                  <path d="M40 10 C36 18, 36 24, 40 28 C44 24, 44 18, 40 10Z" fill="url(#pg2)"/>
                  <path d="M40 52 C36 56, 36 62, 40 70 C44 62, 44 56, 40 52Z" fill="url(#pg2)"/>
                  <path d="M10 40 C18 36, 24 36, 28 40 C24 44, 18 44, 10 40Z" fill="url(#pg2)"/>
                  <path d="M52 40 C56 36, 62 36, 70 40 C62 44, 56 44, 52 40Z" fill="url(#pg2)"/>
                  {/* Diagonal petals */}
                  <path d="M19 19 C24 24, 27 30, 28 34 C32 33, 36 28, 34 22 Z" fill="url(#pg2)" opacity="0.8"/>
                  <path d="M61 19 C56 24, 53 30, 52 34 C48 33, 44 28, 46 22 Z" fill="url(#pg2)" opacity="0.8"/>
                  <path d="M19 61 C24 56, 27 50, 28 46 C32 47, 36 52, 34 58 Z" fill="url(#pg2)" opacity="0.8"/>
                  <path d="M61 61 C56 56, 53 50, 52 46 C48 47, 44 52, 46 58 Z" fill="url(#pg2)" opacity="0.8"/>
                  {/* Centre circle */}
                  <circle cx="40" cy="40" r="7" fill="url(#pg2)"/>
                  <circle cx="40" cy="40" r="3.5" fill="#5C2D0A"/>
                </svg>
              </span>
              <span className={styles.pillarLabel}>Persian Roots</span>
              <span className={styles.pillarDesc}>Art carried across centuries</span>
            </div>

            {/* Jhelum Waters — Stylised river & ripple */}
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>
                <svg width="44" height="44" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="pg3" x1="0" y1="20" x2="80" y2="60" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#E8B87A"/><stop offset="100%" stopColor="#B87333"/>
                    </linearGradient>
                  </defs>
                  {/* Copper vessel / pot silhouette */}
                  <path d="M28 20 C22 20, 16 26, 16 36 L16 52 C16 58, 22 62, 40 62 C58 62, 64 58, 64 52 L64 36 C64 26, 58 20, 52 20 Z" fill="url(#pg3)" opacity="0.2" stroke="url(#pg3)" strokeWidth="2"/>
                  {/* Water waves inside */}
                  <path d="M22 34 Q30 29, 40 34 Q50 39, 58 34" stroke="url(#pg3)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M22 42 Q30 37, 40 42 Q50 47, 58 42" stroke="url(#pg3)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M22 50 Q30 45, 40 50 Q50 55, 58 50" stroke="url(#pg3)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  {/* Neck of vessel */}
                  <rect x="32" y="12" width="16" height="10" rx="4" fill="url(#pg3)" opacity="0.7"/>
                  {/* Spout */}
                  <path d="M56 30 Q64 28, 66 22" stroke="url(#pg3)" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  {/* Handle */}
                  <path d="M16 32 Q8 36, 8 44 Q8 52, 16 54" stroke="url(#pg3)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
              <span className={styles.pillarLabel}>Jhelum Waters</span>
              <span className={styles.pillarDesc}>Where copper meets Kashmir</span>
            </div>

            {/* Chinar Trees — Proper 5-lobed Chinar leaf */}
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>
                <svg width="44" height="44" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="pg4" x1="10" y1="5" x2="90" y2="95" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#E8B87A"/><stop offset="45%" stopColor="#B87333"/><stop offset="100%" stopColor="#8B4513"/>
                    </linearGradient>
                    <linearGradient id="pg4s" x1="50" y1="70" x2="50" y2="108" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#C9A84C"/><stop offset="100%" stopColor="#8B6914"/>
                    </linearGradient>
                  </defs>
                  <path d="M50 8 C44 8, 34 16, 32 26 C30 36, 36 44, 50 48 C64 44, 70 36, 68 26 C66 16, 56 8, 50 8Z" fill="url(#pg4)"/>
                  <path d="M32 26 C26 18, 14 18, 10 28 C6 38, 14 48, 28 50 C36 46, 38 38, 36 30 Z" fill="url(#pg4)" opacity="0.92"/>
                  <path d="M68 26 C74 18, 86 18, 90 28 C94 38, 86 48, 72 50 C64 46, 62 38, 64 30 Z" fill="url(#pg4)" opacity="0.92"/>
                  <path d="M28 50 C20 46, 8 50, 6 62 C4 72, 14 80, 30 76 C40 70, 42 60, 38 54 Z" fill="url(#pg4)" opacity="0.85"/>
                  <path d="M72 50 C80 46, 92 50, 94 62 C96 72, 86 80, 70 76 C60 70, 58 60, 62 54 Z" fill="url(#pg4)" opacity="0.85"/>
                  <path d="M36 30 C38 42, 40 56, 50 78 C60 56, 62 42, 64 30 C58 38, 50 42, 42 38 Z" fill="url(#pg4)" opacity="0.65"/>
                  <path d="M50 48 L50 100" stroke="url(#pg4s)" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M50 62 L30 76" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
                  <path d="M50 54 L28 62" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                  <path d="M50 62 L70 76" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
                  <path d="M50 54 L72 62" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </span>
              <span className={styles.pillarLabel}>Chinar Trees</span>
              <span className={styles.pillarDesc}>Our eternal symbol</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
