'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './BrandStory.module.css';

const panels = [
  {
    id: 'panel-valley',
    label: 'The Valley',
    heading: 'Where the Jhelum\nWhispers Stories',
    body: `Kashmir — the crown of India — has been home to master craftsmen for over 500 years. 
    The same mountains, the same rivers, the same hands. Our copper utensils are not just vessels; 
    they are vessels of memory, of morning chai, of Eid feasts and winter warmth.`,
    image: '/story-noon-chai.png',
    imageAlt: 'Kashmiri woman pouring Noon Chai from a copper Samovar by Dal Lake',
    accent: 'Dal Lake · Srinagar',
  },
  {
    id: 'panel-kandkari',
    label: 'The Craft',
    heading: 'Kandkari — The\nArt of Engraving',
    body: `Each design is carved freehand by a Naqashqar (master engraver) — no stencils, no machines. 
    Chinar leaves, lotus blooms, and valley vines come to life on raw copper through years of practiced 
    hands. A single piece can take days to complete.`,
    image: '/artisan-engraving.png',
    imageAlt: 'Kashmiri artisan engraving copper vessel with traditional Kandkari technique',
    accent: 'Naqashqar · Master Engravers',
  },
  {
    id: 'panel-heritage',
    label: 'The Heritage',
    heading: 'From Our Hands\nTo Your Home',
    body: `Healthcare Copper was born from a simple belief: that the finest things in life should 
    be made with love and passed with purpose. When you hold one of our pieces, you hold the 
    legacy of Kashmir's most celebrated craft tradition.`,
    image: '/family-kitchen.png',
    imageAlt: 'Kashmiri grandmother passing copper vessel to daughter-in-law',
    accent: 'Healthcare Copper · Kashmir',
  },
];

export default function BrandStory() {
  const sectionRef  = useRef<HTMLElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection observer for fade-in on mobile / vertical layout
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15 }
    );

    const panels = sectionRef.current?.querySelectorAll(`.${styles.panel}`);
    panels?.forEach((p) => observer.observe(p));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" ref={sectionRef} className={`${styles.story} paisley-bg`}>
      <div className={styles.header}>
        <span className="section-label">Our Heritage</span>
        <h2 className={styles.headerHeading}>
          The <span className="text-copper">Story</span> Behind<br />Every Piece
        </h2>
        <p className={styles.headerSub}>
          Three chapters. Five hundred years. One Valley.
        </p>
      </div>

      <div ref={trackRef} className={styles.panels}>
        {panels.map((panel, i) => (
          <div key={panel.id} id={panel.id} className={styles.panel}>
            <div className={styles.panelImage}>
              <Image
                src={panel.image}
                alt={panel.imageAlt}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.panelOverlay} />
              <span className={styles.panelAccent}>{panel.accent}</span>
            </div>

            <div className={styles.panelContent}>
              <div className={styles.panelNum}>0{i + 1}</div>
              <span className={`section-label ${styles.panelLabel}`}>{panel.label}</span>
              <h3 className={styles.panelHeading}>
                {panel.heading.split('\n').map((line, j) => (
                  <span key={j}>
                    {j === 0 ? line : <><br /><em className="text-copper">{line}</em></>}
                  </span>
                ))}
              </h3>
              <p className={styles.panelBody}>{panel.body}</p>
              <span className="copper-line" style={{ margin: '24px 0 0', display: 'block' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
