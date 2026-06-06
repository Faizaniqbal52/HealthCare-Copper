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
            {[
              { label: 'Srinagar', icon: '🏔️', desc: 'Our home in the Valley' },
              { label: 'Persian Roots', icon: '🌿', desc: 'Art carried across centuries' },
              { label: 'Jhelum Waters', icon: '💧', desc: 'Where copper meets Kashmir' },
              { label: 'Chinar Trees', icon: '🍂', desc: 'Our eternal symbol' },
            ].map((pillar) => (
              <div key={pillar.label} className={styles.pillar}>
                <span className={styles.pillarIcon}>{pillar.icon}</span>
                <span className={styles.pillarLabel}>{pillar.label}</span>
                <span className={styles.pillarDesc}>{pillar.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
