'use client';

import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      {/* Top wave */}
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#1C0F08" />
        </svg>
      </div>

      <div className={styles.inner}>
        {/* Top grid */}
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoWrap}>
              <svg width="32" height="32" viewBox="0 0 60 60" fill="none">
                <path d="M30 5 C30 5, 10 18, 12 32 C14 44, 28 48, 30 55 C32 48, 46 44, 48 32 C50 18, 30 5, 30 5Z"
                  fill="url(#footerGrad)" />
                <path d="M30 55 L30 38" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M30 42 L22 35" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
                <path d="M30 42 L38 35" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
                <defs>
                  <linearGradient id="footerGrad" x1="12" y1="5" x2="48" y2="55">
                    <stop offset="0%" stopColor="#D4956A"/>
                    <stop offset="50%" stopColor="#B87333"/>
                    <stop offset="100%" stopColor="#C9A84C"/>
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <span className={styles.logoName}>Healthcare Copper</span>
                <span className={styles.logoTagline}>Kashmir's Finest Craft</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Handcrafted copper utensils and crockery rooted in 500 years of Kashmiri 
              artisan tradition. Every piece, a story of the Valley.
            </p>
            <div className={styles.socialRow}>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://wa.me/+91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navigate</h4>
            {[
              { label: 'Home',            id: 'hero' },
              { label: 'Our Story',       id: 'story' },
              { label: 'Products',        id: 'products' },
              { label: 'Health Benefits', id: 'health' },
              { label: 'Kashmir Roots',   id: 'kashmir' },
              { label: 'Craft Process',   id: 'craft' },
              { label: 'Contact',         id: 'contact' },
            ].map((link) => (
              <button
                key={link.id}
                className={styles.colLink}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Products */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Products</h4>
            {[
              'Kashmiri Samovar',
              'Copper Bottles',
              'Wazwan Traam',
              'Kandkari Engraved Bottle',
              'Copper Chai Set',
              'Decorative Vases',
            ].map((p) => (
              <button
                key={p}
                className={styles.colLink}
                onClick={() => scrollTo('products')}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Contact info */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Connect</h4>
            <div className={styles.infoItem}>
              <span>📍</span>
              <span>Srinagar, Kashmir<br />Jammu & Kashmir, India</span>
            </div>
            <div className={styles.infoItem}>
              <span>📱</span>
              <span>+91 XXXX XXX XXX</span>
            </div>
            <div className={styles.infoItem}>
              <span>✉️</span>
              <span>info@healthcarecopper.com</span>
            </div>
            <a
              href="https://wa.me/+91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBtn}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p>
            © {year} Healthcare Copper · Handcrafted in Kashmir 🇮🇳
          </p>
          <p className={styles.madeWith}>
            Rooted in the Valley · Carried to the World
          </p>
        </div>
      </div>
    </footer>
  );
}
