'use client'

import { useState } from 'react'
import Link from 'next/link'

const FAQS = [
  {
    id: 1,
    category: 'Finding Us',
    question: 'Where can I buy your bags?',
    answer: 'Right now, the best place to find Sew Nerdy Bags is in person at conventions and shows across the Southeast. That\'s where new designs debut and where you can see, touch, and try everything before you commit. Sign up for the mailing list to be the first to know about new drops and where we\'re headed next.',
  },
  {
    id: 2,
    category: 'The Bags',
    question: 'What materials go into a Sew Nerdy bag?',
    answer: 'Every material used in a Sew Nerdy bag is hand selected to serve the specific design being built. Quality and uniqueness are always the priority. The goal is a bag that turns heads before you even say a word about it. From backpacks to handbags and everything in between, no design is too ambitious. If you can imagine it, there is a good chance we can build it.',
  },
  {
    id: 3,
    category: 'The Bags',
    question: 'What if something goes wrong with my bag?',
    answer: 'Every Sew Nerdy bag is handcrafted from the ground up, making each one a true one of a kind piece built with quality that\'s meant to last. We stand behind every stitch. If you ever run into an issue with your bag, reach out to us directly at the link below and we will work through it with you until it\'s fully resolved.',
  },
  {
    id: 5,
    category: 'Shipping',
    question: 'Do you ship?',
    answer: 'Yes. Sew Nerdy Bags ships anywhere in the United States. Orders outside the contiguous 48 states or to international destinations may require additional shipping and handling fees. Reach out to us before placing your order and we will get you the details.',
  },
]

const CATEGORIES = [...new Set(FAQS.map((f) => f.category))]

export default function FAQPage() {
  const [open, setOpen] = useState(null)

  const toggle = (id) => setOpen(open === id ? null : id)

  return (
    <main>
      {/* ── HERO ── */}
      <section className="faq-hero">
        <div className="faq-hero-bg" aria-hidden="true" />
        <div className="faq-hero-tint" aria-hidden="true" />
        <div className="faq-hero-inner">
          <h1>Got questions?</h1>
          <p className="hero-sub">Everything you need to know about Sew Nerdy Bags and where to find us.</p>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="faq-body">
        {CATEGORIES.map((cat) => (
          <div key={cat} className="faq-group">
            <p className="faq-category">{cat}</p>
            {FAQS.filter((f) => f.category === cat).map((faq) => (
              <div key={faq.id} className={`faq-item ${open === faq.id ? 'faq-open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={open === faq.id}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{open === faq.id ? '−' : '+'}</span>
                </button>
                {open === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="faq-cta">
        <div className="faq-cta-grid">
          <div className="cta-card">
            <p className="cta-label">Stay in the Loop</p>
            <p className="cta-title">Don&rsquo;t miss a show.</p>
            <p className="cta-desc">Sign up for the mailing list to get show announcements and new drops first.</p>
            <Link href="/mailing-list" className="cta-btn">Join the list &rarr;</Link>
          </div>
          <div className="cta-card">
            <p className="cta-label">Still have questions?</p>
            <p className="cta-title">Get in touch.</p>
            <p className="cta-desc">Can&rsquo;t find what you&rsquo;re looking for? Reach out directly and we&rsquo;ll get back to you.</p>
            <Link href="/contact" className="cta-btn">Contact us &rarr;</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ── Hero ── */
        .faq-hero {
          position: relative;
          padding: 5rem 3rem;
          border-bottom: 3px solid #d97706;
          overflow: hidden;
          background: #111;
        }
        .faq-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/shows/booth.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.55;
          z-index: 0;
        }
        .faq-hero-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(217, 119, 6, 0.75) 0%,
            rgba(217, 119, 6, 0.15) 40%,
            rgba(0, 0, 0, 0.3) 100%
          );
          z-index: 1;
        }
        .faq-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }
        .eyebrow {
          display: inline-block;
          background: #d97706;
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.3rem 0.7rem;
          margin-bottom: 1.2rem;
        }
        .faq-hero h1 {
          font-size: 2.8rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .hero-sub {
          color: #fff;
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.85;
        }

        /* ── FAQ Body ── */
        .faq-body {
          padding: 4rem 3rem;
          max-width: 800px;
          background-color: #f5f5f0;
        }
        .faq-group {
          margin-bottom: 3rem;
        }
        .faq-category {
          font-size: 1.2rem;
          font-weight: 700;
          color: #d97706;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #d97706;
        }
        .faq-item {
          border-top: 1px solid #e7e5e4;
        }
        .faq-item:last-child {
          border-bottom: 1px solid #e7e5e4;
        }
        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 1.2rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: left;
          font-size: 1rem;
          font-weight: 600;
          color: #111;
          gap: 1rem;
        }
        .faq-open .faq-question {
          color: #d97706;
        }
        .faq-icon {
          font-size: 1.3rem;
          font-weight: 400;
          color: #d97706;
          flex-shrink: 0;
          line-height: 1;
        }
        .faq-answer {
          padding: 0 0 1.4rem 0;
        }
        .faq-answer p {
          font-size: 0.92rem;
          color: #57534e;
          line-height: 1.75;
        }

        /* ── CTA ── */
        .faq-cta {
          background: #111;
          padding: 4rem 3rem;
          border-top: 3px solid #d97706;
        }
        .faq-cta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .cta-card {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          padding: 1.6rem 1.4rem;
          display: flex;
          flex-direction: column;
        }
        .cta-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #d97706;
          margin-bottom: 0.4rem;
        }
        .cta-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.6rem;
        }
        .cta-desc {
          font-size: 0.83rem;
          color: #a8a29e;
          line-height: 1.55;
          flex: 1;
          margin-bottom: 1.2rem;
        }
        .cta-btn {
          display: inline-block;
          background: #111;
          color: #fff;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.6rem 1.1rem;
          text-decoration: none;
          align-self: flex-start;
        }
        .cta-btn:hover {
          background: #d97706;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .faq-hero {
            padding: 2.5rem 1.5rem;
          }
          .faq-hero h1 {
            font-size: 2rem;
          }
          .faq-body {
            padding: 2.5rem 1.5rem;
          }
          .faq-cta {
            padding: 2.5rem 1.5rem;
          }
          .faq-cta-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}
