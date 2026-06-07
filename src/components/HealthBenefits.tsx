'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './HealthBenefits.module.css';

const benefits = [
  { img: '/icon-antimicrobial.png', title: 'Natural Antimicrobial', desc: 'Copper naturally kills 99.9% of bacteria, fungi, and viruses within hours. Water stored in copper for 8+ hours becomes naturally purified.' },
  { img: '/icon-ayurveda.png',     title: 'Ayurvedic Wisdom',     desc: 'Ancient Ayurvedic texts (Charaka Samhita) call copper "Tamra Jal" — a remedy for digestive disorders, joint inflammation, and improved metabolism.' },
  { img: '/icon-brain.png',        title: 'Brain & Nerve Health', desc: 'Copper aids in the synthesis of phospholipids, essential for myelin sheaths that protect nerve cells and support cognitive function.' },
  { img: '/icon-heart.png',        title: 'Heart & Circulation',  desc: 'Copper regulates blood pressure, reduces bad cholesterol, and supports the formation of haemoglobin — keeping your heart strong and blood pure.' },
  { img: '/icon-bones.png',        title: 'Bones & Joints',       desc: 'Copper is essential for the formation of collagen and connective tissue. Regular use supports strong bones and reduces arthritis pain.' },
  { img: '/icon-skin.png',         title: 'Skin & Anti-Aging',    desc: "Copper stimulates the production of melanin and collagen — the skin's building blocks. Ancient queens stored their skin tonics in copper vessels." },
];


function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal]     = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const steps    = 60;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function HealthBenefits() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.1 }
    );
    const cards = sectionRef.current?.querySelectorAll(`.${styles.card}`);
    cards?.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="health" ref={sectionRef} className={`${styles.health} section-pad paisley-bg`}>
      {/* Background image layer */}
      <div className={styles.bgLayer}>
        <Image
          src="/health-girl.png"
          alt="Young Kashmiri girl drinking from copper bottle in the mountains"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">Why Copper</span>
          <h2 className={styles.heading}>
            6 Reasons Copper is <span className="text-copper">Sacred</span>
          </h2>
          <p className={styles.sub}>
            Science and Ayurveda agree — copper is one of the most beneficial metals
            for human health. Our ancestors knew this long before laboratories did.
          </p>
        </div>

        {/* Stat counters */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNum}><Counter target={99} suffix=".9%" /></div>
            <p className={styles.statLabel}>Bacteria eliminated by copper in 2 hours</p>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}><Counter target={500} suffix="+" /></div>
            <p className={styles.statLabel}>Years of Ayurvedic copper use documented</p>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}><Counter target={8} /></div>
            <p className={styles.statLabel}>Hours to store water in copper for best results</p>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}><Counter target={100} suffix="%" /></div>
            <p className={styles.statLabel}>Pure copper, no alloys or coatings</p>
          </div>
        </div>

        {/* Benefit cards */}
        <div className={styles.grid}>
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={styles.card}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className={styles.cardIcon}>
                <Image src={b.img} alt={b.title} width={64} height={64} style={{ objectFit: 'contain' }} />
              </span>
              <h4 className={styles.cardTitle}>{b.title}</h4>
              <p className={styles.cardDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
