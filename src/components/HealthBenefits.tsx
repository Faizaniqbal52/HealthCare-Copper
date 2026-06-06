'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './HealthBenefits.module.css';

// SVG icon components — no emojis
const AntimicrobialIcon = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="hg1" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#E8B87A"/><stop offset="100%" stopColor="#B87333"/></linearGradient></defs>
    {/* Shield */}
    <path d="M40 6 L68 18 L68 42 C68 58, 56 70, 40 74 C24 70, 12 58, 12 42 L12 18 Z" stroke="url(#hg1)" strokeWidth="2.5" fill="none"/>
    <path d="M40 14 L60 24 L60 42 C60 54, 52 64, 40 68 C28 64, 20 54, 20 42 L20 24 Z" fill="url(#hg1)" opacity="0.15"/>
    {/* Copper atom / molecule */}
    <circle cx="40" cy="40" r="6" fill="url(#hg1)"/>
    <ellipse cx="40" cy="40" rx="16" ry="7" stroke="url(#hg1)" strokeWidth="1.5" fill="none"/>
    <ellipse cx="40" cy="40" rx="16" ry="7" stroke="url(#hg1)" strokeWidth="1.5" fill="none" transform="rotate(60 40 40)"/>
    <ellipse cx="40" cy="40" rx="16" ry="7" stroke="url(#hg1)" strokeWidth="1.5" fill="none" transform="rotate(120 40 40)"/>
    {/* Checkmark */}
    <path d="M33 40 L38 45 L48 34" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AyurvedaIcon = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="hg2" x1="10" y1="5" x2="70" y2="75" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#E8B87A"/><stop offset="100%" stopColor="#B87333"/></linearGradient></defs>
    {/* Lotus petals — 8 petals */}
    <path d="M40 38 C38 30, 32 22, 40 14 C48 22, 42 30, 40 38Z" fill="url(#hg2)"/>
    <path d="M40 38 C48 30, 58 24, 66 30 C62 40, 52 38, 40 38Z" fill="url(#hg2)" opacity="0.9"/>
    <path d="M40 38 C48 46, 58 52, 62 62 C52 66, 44 56, 40 38Z" fill="url(#hg2)" opacity="0.85"/>
    <path d="M40 38 C32 46, 22 52, 18 62 C28 66, 36 56, 40 38Z" fill="url(#hg2)" opacity="0.85"/>
    <path d="M40 38 C32 30, 22 24, 14 30 C18 40, 28 38, 40 38Z" fill="url(#hg2)" opacity="0.9"/>
    {/* Inner circle with Ayurveda mark */}
    <circle cx="40" cy="38" r="9" fill="url(#hg2)"/>
    <circle cx="40" cy="38" r="5" fill="#5C2D0A" opacity="0.6"/>
    {/* Copper drop */}
    <path d="M40 18 Q44 26, 44 30 Q44 35, 40 35 Q36 35, 36 30 Q36 26, 40 18Z" fill="#C9A84C" opacity="0.5"/>
    {/* Stem */}
    <path d="M40 47 L40 66" stroke="url(#hg2)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 58 Q32 52, 24 56" stroke="url(#hg2)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M40 62 Q48 56, 56 60" stroke="url(#hg2)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const BrainIcon = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="hg3" x1="5" y1="10" x2="75" y2="70" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#E8B87A"/><stop offset="100%" stopColor="#B87333"/></linearGradient></defs>
    {/* Brain hemisphere outlines */}
    <path d="M40 20 C28 20, 14 28, 14 42 C14 54, 24 62, 38 62 L38 20Z" fill="url(#hg3)" opacity="0.8"/>
    <path d="M40 20 C52 20, 66 28, 66 42 C66 54, 56 62, 42 62 L42 20Z" fill="url(#hg3)" opacity="0.7"/>
    {/* Gyri / folds */}
    <path d="M22 32 Q28 28, 30 34 Q26 38, 22 36" stroke="#5C2D0A" strokeWidth="1.5" fill="none" opacity="0.5"/>
    <path d="M22 44 Q28 40, 32 46 Q28 50, 22 48" stroke="#5C2D0A" strokeWidth="1.5" fill="none" opacity="0.5"/>
    <path d="M58 32 Q52 28, 50 34 Q54 38, 58 36" stroke="#5C2D0A" strokeWidth="1.5" fill="none" opacity="0.5"/>
    <path d="M58 44 Q52 40, 48 46 Q52 50, 58 48" stroke="#5C2D0A" strokeWidth="1.5" fill="none" opacity="0.5"/>
    {/* Corpus callosum / divider */}
    <line x1="40" y1="20" x2="40" y2="62" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6"/>
    {/* Synapse nodes */}
    <circle cx="26" cy="36" r="3" fill="#C9A84C"/>
    <circle cx="54" cy="36" r="3" fill="#C9A84C"/>
    <circle cx="30" cy="50" r="2.5" fill="#C9A84C" opacity="0.7"/>
    <circle cx="50" cy="50" r="2.5" fill="#C9A84C" opacity="0.7"/>
    {/* Stem */}
    <rect x="36" y="62" width="8" height="8" rx="2" fill="url(#hg3)" opacity="0.6"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="hg4" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#E8B87A"/><stop offset="100%" stopColor="#B87333"/></linearGradient></defs>
    {/* Heart shape */}
    <path d="M40 64 C40 64, 10 46, 10 28 C10 18, 18 12, 28 12 C34 12, 40 16, 40 16 C40 16, 46 12, 52 12 C62 12, 70 18, 70 28 C70 46, 40 64, 40 64Z" fill="url(#hg4)" opacity="0.85"/>
    <path d="M40 64 C40 64, 10 46, 10 28 C10 18, 18 12, 28 12 C34 12, 40 16, 40 16 C40 16, 46 12, 52 12 C62 12, 70 18, 70 28 C70 46, 40 64, 40 64Z" stroke="url(#hg4)" strokeWidth="1" fill="none"/>
    {/* EKG / pulse line */}
    <path d="M14 36 L24 36 L28 26 L33 46 L37 32 L41 40 L45 36 L66 36" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BoneIcon = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="hg5" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#E8B87A"/><stop offset="100%" stopColor="#B87333"/></linearGradient></defs>
    {/* Bone shaft */}
    <rect x="32" y="22" width="16" height="36" rx="4" fill="url(#hg5)"/>
    {/* Top end-caps (epiphysis) */}
    <circle cx="28" cy="20" r="10" fill="url(#hg5)" opacity="0.9"/>
    <circle cx="52" cy="20" r="10" fill="url(#hg5)" opacity="0.9"/>
    {/* Bottom end-caps */}
    <circle cx="28" cy="60" r="10" fill="url(#hg5)" opacity="0.9"/>
    <circle cx="52" cy="60" r="10" fill="url(#hg5)" opacity="0.9"/>
    {/* Trabeculae — inner texture lines */}
    <line x1="36" y1="30" x2="44" y2="38" stroke="#5C2D0A" strokeWidth="1.2" opacity="0.35"/>
    <line x1="36" y1="38" x2="44" y2="46" stroke="#5C2D0A" strokeWidth="1.2" opacity="0.35"/>
    <line x1="36" y1="46" x2="44" y2="54" stroke="#5C2D0A" strokeWidth="1.2" opacity="0.35"/>
    {/* Gleam */}
    <ellipse cx="36" cy="22" rx="4" ry="6" fill="white" opacity="0.12" transform="rotate(-30 36 22)"/>
  </svg>
);

const SkinIcon = () => (
  <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="hg6" x1="10" y1="10" x2="70" y2="70" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#E8B87A"/><stop offset="100%" stopColor="#B87333"/></linearGradient></defs>
    {/* Face / skin oval */}
    <ellipse cx="40" cy="42" rx="22" ry="26" fill="url(#hg6)" opacity="0.2" stroke="url(#hg6)" strokeWidth="2"/>
    {/* Radiance rays */}
    <line x1="40" y1="10" x2="40" y2="4" stroke="url(#hg6)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="58" y1="16" x2="62" y2="12" stroke="url(#hg6)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="22" y1="16" x2="18" y2="12" stroke="url(#hg6)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="66" y1="34" x2="72" y2="32" stroke="url(#hg6)" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="34" x2="8" y2="32" stroke="url(#hg6)" strokeWidth="2" strokeLinecap="round"/>
    {/* Leaf/collagen symbol inside */}
    <path d="M40 30 C36 32, 30 38, 32 48 C34 56, 40 58, 40 58 C40 58, 46 56, 48 48 C50 38, 44 32, 40 30Z" fill="url(#hg6)" opacity="0.8"/>
    {/* Vein */}
    <path d="M40 58 L40 44" stroke="#5C2D0A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M40 50 L35 46" stroke="#5C2D0A" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    <path d="M40 50 L45 46" stroke="#5C2D0A" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    {/* Sparkle */}
    <circle cx="52" cy="28" r="3" fill="#C9A84C"/>
    <circle cx="52" cy="28" r="1.5" fill="white" opacity="0.6"/>
  </svg>
);

const benefits = [
  { Icon: AntimicrobialIcon, title: 'Natural Antimicrobial', desc: 'Copper naturally kills 99.9% of bacteria, fungi, and viruses within hours. Water stored in copper for 8+ hours becomes naturally purified.' },
  { Icon: AyurvedaIcon,     title: 'Ayurvedic Wisdom',     desc: 'Ancient Ayurvedic texts (Charaka Samhita) call copper "Tamra Jal" — a remedy for digestive disorders, joint inflammation, and improved metabolism.' },
  { Icon: BrainIcon,        title: 'Brain & Nerve Health', desc: 'Copper aids in the synthesis of phospholipids, essential for myelin sheaths that protect nerve cells and support cognitive function.' },
  { Icon: HeartIcon,        title: 'Heart & Circulation',  desc: 'Copper regulates blood pressure, reduces bad cholesterol, and supports the formation of haemoglobin — keeping your heart strong and blood pure.' },
  { Icon: BoneIcon,         title: 'Bones & Joints',       desc: 'Copper is essential for the formation of collagen and connective tissue. Regular use supports strong bones and reduces arthritis pain.' },
  { Icon: SkinIcon,         title: 'Skin & Anti-Aging',    desc: "Copper stimulates the production of melanin and collagen — the skin's building blocks. Ancient queens stored their skin tonics in copper vessels." },
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
              <span className={styles.cardIcon}><b.Icon /></span>
              <h4 className={styles.cardTitle}>{b.title}</h4>
              <p className={styles.cardDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
