'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Products.module.css';

const categories = ['All', 'Samovar & Tea', 'Bottles & Drinkware', 'Traam & Platters', 'Decorative'];

const products = [
  {
    id: 'samovar-classic',
    name: 'Classic Kashmiri Samovar',
    category: 'Samovar & Tea',
    tagline: 'The heart of every Kashmiri gathering',
    desc: 'Hand-engraved with traditional Chinar and floral motifs. Serves 6–8 cups of Noon Chai. Pure copper with tin-lined interior (Kalai).',
    badge: 'Bestseller',
    image: '/story-noon-chai.png',
  },
  {
    id: 'copper-bottle-plain',
    name: 'Pure Copper Water Bottle',
    category: 'Bottles & Drinkware',
    tagline: 'Drink pure, drink healthy',
    desc: 'Seamlessly crafted from a single sheet of 99.9% pure copper. Holds 1 litre. Leak-proof screw cap. Ayurvedic benefits of copper-stored water.',
    badge: 'Health Pick',
    image: '/health-girl.png',
  },
  {
    id: 'traam-large',
    name: 'Wazwan Traam Platter',
    category: 'Traam & Platters',
    tagline: 'For feasts worthy of the Valley',
    desc: 'A large ceremonial copper platter used in traditional Kashmiri Wazwan feasts. Hand-hammered surface, ornate border engraving. Diameter: 50cm.',
    badge: 'Heritage',
    image: '/kashmir-flatlay.png',
  },
  {
    id: 'bottle-engraved',
    name: 'Kandkari Engraved Bottle',
    category: 'Bottles & Drinkware',
    tagline: 'A piece of art you carry',
    desc: 'Our signature 800ml bottle hand-engraved with Paisley (Buta) and Chinar motifs. A gift as beautiful as it is useful.',
    badge: 'Artisan',
    image: '/artisan-engraving.png',
  },
  {
    id: 'chai-set',
    name: 'Copper Chai Cup Set (6 pcs)',
    category: 'Samovar & Tea',
    tagline: 'Every sip, a Kashmiri memory',
    desc: 'Set of 6 small copper cups with saucers, hand-engraved Kashida floral borders. Perfect companion to any Samovar. Tin-lined interior.',
    badge: 'Gift Set',
    image: '/family-kitchen.png',
  },
  {
    id: 'vase-decorative',
    name: 'Kandkari Copper Vase',
    category: 'Decorative',
    tagline: "Kashmir's craft, your home's soul",
    desc: 'A tall decorative vase featuring full-surface Kandkari engraving of valley landscapes — mountains, Chinar trees, and the Dal Lake. 30cm height.',
    badge: 'Limited',
    image: '/hero-bg.png',
  },
];

export default function Products() {
  const [active, setActive] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = active === 'All'
    ? products
    : products.filter((p) => p.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.cardVisible);
          }
        });
      },
      { threshold: 0.1 }
    );
    const cards = sectionRef.current?.querySelectorAll(`.${styles.card}`);
    cards?.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [active]);

  return (
    <section id="products" ref={sectionRef} className={`${styles.products} section-pad`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">Our Collection</span>
          <h2 className={styles.heading}>
            Handcrafted <span className="text-copper">Copper</span> Pieces
          </h2>
          <p className={styles.sub}>
            Each item is made to order by skilled artisans in Kashmir.
            No two pieces are ever exactly the same.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={styles.filters} role="tablist" aria-label="Product categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className={styles.grid}>
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={styles.card}
      style={{ transitionDelay: `${index * 0.08}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className={styles.cardImg}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{
            objectFit: 'cover',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
        <div className={styles.cardImgOverlay} />
        {product.badge && (
          <span className={styles.badge}>{product.badge}</span>
        )}
      </div>

      {/* Content */}
      <div className={styles.cardContent}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.cardName}>{product.name}</h3>
        <p className={styles.cardTagline}>{product.tagline}</p>
        <p className={styles.cardDesc}>{product.desc}</p>

        <div className={styles.cardActions}>
          <a
            href="https://wa.me/+91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            aria-label={`Order ${product.name} on WhatsApp`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
            </svg>
            Order via WhatsApp
          </a>
          <button className={styles.detailBtn} aria-label={`View details for ${product.name}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
