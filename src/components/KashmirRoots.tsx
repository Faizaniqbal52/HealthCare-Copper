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
            {/* Srinagar — Hazratbal shrine at golden hour */}
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>
                <Image src="/icon-srinagar.png" alt="Srinagar — Hazratbal Shrine" width={64} height={64} style={{ objectFit: 'contain', borderRadius: '8px' }} />
              </span>
              <span className={styles.pillarLabel}>Srinagar</span>
              <span className={styles.pillarDesc}>Our home in the Valley</span>
            </div>

            {/* Persian Roots — Arabesque copper medallion */}
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>
                <Image src="/icon-persian.png" alt="Persian Roots — Arabesque medallion" width={64} height={64} style={{ objectFit: 'contain', borderRadius: '8px' }} />
              </span>
              <span className={styles.pillarLabel}>Persian Roots</span>
              <span className={styles.pillarDesc}>Art carried across centuries</span>
            </div>

            {/* Jhelum Waters — Copper Samovar with mountain mist */}
            <div className={styles.pillar}>
              <span className={styles.pillarIcon}>
                <Image src="/icon-jhelum.png" alt="Jhelum Waters — Kashmiri copper vessel" width={64} height={64} style={{ objectFit: 'contain', borderRadius: '8px' }} />
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
