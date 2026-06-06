'use client';

import { useRef, useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission (no backend yet)
    await new Promise((res) => setTimeout(res, 1400));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section id="contact" className={`${styles.contact} section-pad`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left — info */}
          <div className={styles.info}>
            <span className="section-label">Get in Touch</span>
            <h2 className={styles.heading}>
              Order or Enquire —<br />
              We're <span className="text-copper">Right Here</span>
            </h2>
            <p className={styles.sub}>
              Based in Kashmir, we ship across India and internationally.
              Reach us via WhatsApp for the fastest response, or fill in the form.
            </p>

            <div className={styles.contactItems}>
              {/* WhatsApp */}
              <a
                href="https://wa.me/+91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
                aria-label="Chat on WhatsApp"
              >
                <span className={styles.contactIcon} style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                </span>
                <div>
                  <span className={styles.contactLabel}>WhatsApp (Fastest)</span>
                  <span className={styles.contactValue}>+91 XXXX XXX XXX</span>
                </div>
              </a>

              {/* Location */}
              <div className={styles.contactItem}>
                <span className={styles.contactIcon} style={{ background: 'var(--gradient-copper)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div>
                  <span className={styles.contactLabel}>Location</span>
                  <span className={styles.contactValue}>Srinagar, Kashmir, J&K — India</span>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:info@healthcarecopper.com"
                className={styles.contactItem}
                aria-label="Send email"
              >
                <span className={styles.contactIcon} style={{ background: 'linear-gradient(135deg,#B87333,#C9A84C)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>info@healthcarecopper.com</span>
                </div>
              </a>

              {/* Social */}
              <div className={styles.social}>
                <span className={styles.socialLabel}>Find us on</span>
                <div className={styles.socialIcons}>
                  <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="YouTube" className={styles.socialIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95C1 8.12 1 12 1 12s0 3.88.46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95C23 15.88 23 12 23 12s0-3.88-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.successMsg}>
                <span className={styles.successIcon}>✓</span>
                <h3>Message Received!</h3>
                <p>We'll get back to you soon. For urgent orders, please WhatsApp us directly.</p>
                <a
                  href="https://wa.me/+91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ marginTop: '20px' }}
                >
                  Open WhatsApp
                </a>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
                <h3 className={styles.formTitle}>Send a Message</h3>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name">Your Name *</label>
                    <input id="contact-name" name="name" type="text" required placeholder="e.g. Faizan Iqbal" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-phone">Phone / WhatsApp</label>
                    <input id="contact-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-email">Email Address *</label>
                  <input id="contact-email" name="email" type="email" required placeholder="you@example.com" />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-product">Product Interest</label>
                  <select id="contact-product" name="product">
                    <option value="">Select a product category</option>
                    <option>Samovar &amp; Tea Sets</option>
                    <option>Copper Bottles &amp; Drinkware</option>
                    <option>Traam &amp; Platters</option>
                    <option>Decorative Pieces</option>
                    <option>Custom / Bulk Order</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what you're looking for, any customisation requests, shipping destination..."
                  />
                </div>

                <button id="contact-submit" type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? (
                    <span className={styles.spinner} />
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
