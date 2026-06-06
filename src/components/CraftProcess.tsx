'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './CraftProcess.module.css';

const steps = [
  {
    num: '01',
    title: 'Barak Saaz — Selecting the Copper',
    subtitle: 'Raw Material Selection',
    desc: 'The journey begins at the copper market in Srinagar\'s old city. Only high-purity copper sheets — sourced from trusted traders — are selected. The artisan tests flexibility, thickness, and tone before any work begins.',
    icon: '⚒️',
    image: '/craft-step1-selection.png',
    imageAlt: 'Kashmiri artisan selecting copper sheets at the Srinagar copper market',
  },
  {
    num: '02',
    title: 'Thaap — Hammering & Shaping',
    subtitle: 'Hand Hammering',
    desc: 'Using wooden mallets and steel anvils, the copper sheet is slowly coaxed into form. This is physically demanding work — shaping a single Samovar can take 2–3 days of continuous hammering. Every indentation is intentional.',
    icon: '🔨',
    image: '/craft-hammering.png',
    imageAlt: 'Kashmiri coppersmith hammering a copper sheet into shape',
  },
  {
    num: '03',
    title: 'Naqash — Kandkari Engraving',
    subtitle: 'Master Engraving',
    desc: 'This is the heart of the craft. A Naqashqar (engraver) uses a thin steel chisel to carve intricate Chinar leaf, Paisley (Buta), and floral vine patterns freehand. No templates. Pure memory and mastery.',
    icon: '✏️',
    image: '/artisan-engraving.png',
    imageAlt: 'Master engraver carving Kandkari patterns on a copper vessel',
  },
  {
    num: '04',
    title: 'Kalai — Tin Lining',
    subtitle: 'Food-Safe Lining',
    desc: 'The interior of all cooking and drinking vessels receives a traditional "Kalai" — a coating of pure food-grade tin applied by heating and burnishing. This protects the copper from acidic foods and makes it safe for daily use.',
    icon: '🫙',
    image: '/craft-step4-kalai.png',
    imageAlt: 'Kashmiri craftsman applying traditional Kalai tin lining to a copper vessel over fire',
  },
  {
    num: '05',
    title: 'Chamak — Polishing & Finishing',
    subtitle: 'Final Polish',
    desc: 'The finished piece is polished using natural tamarind paste and fine sand — an ancient Kashmiri method that brings out the deep, warm luster of the copper without chemicals. The result is a piece that shines for decades.',
    icon: '✨',
    image: '/craft-step5-chamak.png',
    imageAlt: 'Kashmiri artisan polishing a copper Samovar with tamarind paste to a mirror shine',
  },
];

export default function CraftProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.stepVisible);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );
    const steps = sectionRef.current?.querySelectorAll(`.${styles.step}`);
    steps?.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="craft" ref={sectionRef} className={`${styles.craft} section-pad`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">The Process</span>
          <h2 className={styles.heading}>
            From Raw Copper to<br /><span className="text-copper">Living Heritage</span>
          </h2>
          <p className={styles.sub}>
            Five stages. Centuries of knowledge. Every step performed by human hands, with human care.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden="true" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`${styles.step} ${i % 2 === 0 ? styles.stepLeft : styles.stepRight}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Number dot on the line */}
              <div className={styles.dot} aria-hidden="true">
                <span>{step.num}</span>
              </div>

              {/* Content card */}
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.cardImageOverlay} />
                  <span className={styles.cardIcon}>{step.icon}</span>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.stepSubtitle}>{step.subtitle}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
