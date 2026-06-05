'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function OurStoryPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="story-hero">
        <div className="story-hero-bg" aria-hidden="true" />
        <div className="story-hero-tint" aria-hidden="true" />
        <div className="story-hero-inner">
          <h1>Made by hand.<br />Made by family.</h1>
          <p className="story-hero-sub">
            Two generations, one shared obsession with craft. Every Sew Nerdy bag is built by Elaine and Megan, a mother and daughter who believe what you carry should mean something.
          </p>
        </div>
      </section>

      {/* ── MAIN STORY ── */}
      <section className="story-body">
        <div className="story-grid">

          {/* Image column */}
          <div className="story-img-col">
            <div className="story-img-wrap">
              <Image
                src="/images/our-story.jpg"
                alt="Elaine and Megan at a trade show"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="story-img-caption">
              <span className="caption-tag">The makers</span>
              <p>Elaine &amp; Megan — Pensacola, FL</p>
            </div>
          </div>

          {/* Text column */}
          <div className="story-text-col">
            <p className="story-eyebrow">Our Story</p>
            <p className="story-intro">
              Sew Nerdy Bags is a family collaboration between Elaine and her daughter Megan, built on creativity, craftsmanship, and a shared love of making things that feel personal.
            </p>

            <div className="story-content">
              <p>
                Elaine has spent most of her life creating. She is self taught and endlessly curious. Over the years, she has built and run several creative businesses — from WWII and early aviation collectibles to embroidery and more. She brings nearly three decades of experience to her work. One idea has always guided her: make things well and never stop pushing the craft forward.
              </p>

              <p>
                Sew Nerdy Bags is, in many ways, a return to embroidery for Elaine. This time, though, it has a new direction.
              </p>

              <p>
                About ten years ago, after Megan relocated to Pensacola, the two decided to build something together. It started as a partnership. Elaine brought experience. Megan brought new ideas and new interests. She also brought a growing love for pop culture and comics. Over time, the designs changed. They became more playful. More nerdy. More their own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <div className="story-quote">
        <div className="story-quote-inner">
          <p>&ldquo;No two pieces are ever the same. A lot of time goes into every bag — choosing fabrics, building the structure, stitching the details, refining the final result. Nothing is sold unless they are genuinely proud of it.&rdquo;</p>
          <div className="quote-mailing-nudge">
            <p className="quote-mailing-label">Want to know when we&rsquo;re at a show near you?</p>
            <Link
              href="/mailing-list"
              style={{
                display: 'inline-block',
                background: '#d97706',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.55rem 1.2rem',
                textDecoration: 'none',
                marginTop: '0.2rem',
              }}
            >Join the mailing list &rarr;</Link>
          </div>
        </div>
      </div>

      {/* ── CONTINUED STORY ── */}
      <section className="story-continued">
        <div className="story-continued-inner">
          <p className="story-eyebrow">The craft</p>
          <div className="story-content">
            <p>
              They work out of their home studios. Each bag is taken from concept to completion by hand. No two pieces are ever the same. Time is spent choosing fabrics, building the structure, stitching the details, and refining the final result. They are their own worst critics.
            </p>

            <p>
              At the heart of Sew Nerdy is a simple idea. These are not just products. They are one of one pieces. Each bag is made to be used and loved — and to feel special. Mass produced things rarely do.
            </p>

            <p>
              A big part of what keeps Elaine and Megan going is the people they meet. At conventions and shows, they see how the bags connect with customers. Sometimes it is a reminder of childhood. Sometimes it is the excitement of finding a new favorite accessory. Over the years, they have built a loyal group of customers who come back again and again. That connection means everything to them.
            </p>

            <p>
              Working together is not always simple. They come from different generations with different tastes and different instincts. They challenge each other. They push each other. Sometimes they disagree. Over time, they have learned to appreciate those differences and rely on them. That contrast keeps the work interesting and keeps it moving forward.
            </p>

            <p>
              Sew Nerdy Bags is playful, nerdy, and a little quirky by nature. Underneath that is a serious commitment to quality and care. These bags are made by hand. They are made by family. They are made in small numbers. Each one carries a lot of thought and pride in every stitch.
            </p>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="story-cta">
        <div className="story-cta-inner">
          <p className="cta-eyebrow">See the work</p>
          <h2>Every bag tells a story.<br />Find yours.</h2>
          <div className="cta-buttons">
            <Link href="/gallery" style={{display:'inline-block',background:'#d97706',color:'#fff',fontSize:'0.78rem',fontWeight:'700',letterSpacing:'0.08em',textTransform:'uppercase',padding:'0.75rem 1.4rem',textDecoration:'none'}}>Browse the gallery &rarr;</Link>
          </div>
          <div className="cta-mailing-nudge">
            <p className="cta-mailing-label">Want to know when we&rsquo;re at a show near you?</p>
            <Link
              href="/mailing-list"
              style={{
                display: 'inline-block',
                background: '#d97706',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.55rem 1.2rem',
                textDecoration: 'none',
                marginTop: '0.2rem',
              }}
            >Join the mailing list &rarr;</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ── Hero ── */
        .story-hero {
          position: relative;
          padding: 4rem 3rem;
          border-bottom: 3px solid #d97706;
          overflow: hidden;
          background: #111;
        }
        .story-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/our-story.jpg');
          background-size: cover;
          background-position: center 20%;
          opacity: 0.45;
          z-index: 0;
        }
        .story-hero-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(217, 119, 6, 0.6) 0%,
            rgba(0, 0, 0, 0.45) 50%,
            rgba(0, 0, 0, 0.6) 100%
          );
          z-index: 1;
        }
        .story-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 720px;
        }
        .story-hero h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 1.2rem;
        }
        .story-hero-sub {
          font-size: 1.05rem;
          color: #fff;
          opacity: 0.85;
          line-height: 1.7;
          max-width: 600px;
        }

        /* ── Main Story ── */
        .story-body {
          background: #f5f5f4;
          padding: 4rem 3rem;
        }
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          max-width: 1200px;
        }
        .story-img-col {
          position: sticky;
          top: 2rem;
        }
        .story-img-wrap {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
        }
        .story-img-caption {
          padding: 0.8rem 0 0;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .caption-tag {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          background: #d97706;
          padding: 0.2rem 0.6rem;
        }
        .story-img-caption p {
          font-size: 0.82rem;
          color: #78716c;
        }
        .story-text-col {
          padding-top: 0.5rem;
        }
        .story-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #d97706;
          margin-bottom: 1rem;
        }
        .story-intro {
          font-size: 1.15rem;
          font-weight: 600;
          color: #111;
          line-height: 1.6;
          margin-bottom: 1.8rem;
          border-left: 3px solid #d97706;
          padding-left: 1rem;
        }
        .story-content p {
          font-size: 0.95rem;
          color: #44403c;
          line-height: 1.85;
          margin-bottom: 1.2rem;
        }

        /* ── Pull Quote ── */
        .story-quote {
          background: #1a1208;
          padding: 1.2rem 3rem;
          border-top: 1px solid #3a2a10;
          border-bottom: 1px solid #3a2a10;
        }
        .story-quote-inner {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }
        .story-quote-inner p {
          font-size: 1.3rem;
          font-style: italic;
          color: #fff;
          line-height: 1.7;
          border-left: none;
        }
        .quote-mailing-nudge {
          margin-top: 1.8rem;
        }
        .quote-mailing-label {
          font-size: 0.85rem;
          font-style: normal;
          color: #a8896a;
          margin-bottom: 0.8rem;
        }
        .quote-mailing-btn {
          display: inline-block;
          background: #d97706;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.55rem 1.2rem;
          text-decoration: none;
        }
        .quote-mailing-btn:hover {
          background: #b45309;
          color: #fff;
        }
        .story-quote-inner > p::before {
          display: block;
          content: '';
          width: 2.5rem;
          height: 3px;
          background: #d97706;
          margin: 0 auto 1.5rem;
        }

        /* ── Continued Story ── */
        .story-continued {
          background: #f5f5f4;
          padding: 4rem 3rem;
        }
        .story-continued-inner {
          max-width: 720px;
        }
        .story-continued .story-content p {
          font-size: 0.95rem;
          color: #44403c;
          line-height: 1.85;
          margin-bottom: 1.2rem;
        }

        /* ── CTA ── */
        .story-cta {
          background: radial-gradient(ellipse at center, #7a3a00 0%, #2a1500 40%, #111 100%);
          padding: 0.8rem 3rem;
          border-top: 3px solid #d97706;
        }
        .story-cta-inner {
          max-width: 600px;
        }
        .cta-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #d97706;
          margin-bottom: 1rem;
        }
        .story-cta h2 {
          font-size: 2.2rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .cta-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .cta-btn-primary {
          display: inline-block;
          background: #d97706;
          color: #fff;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.75rem 1.4rem;
          text-decoration: none;
        }
        .cta-btn-primary:hover {
          background: #b45309;
        }
        .cta-btn-secondary {
          display: inline-block;
          background: transparent;
          color: #fff;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.75rem 1.4rem;
          text-decoration: none;
          border: 1px solid #44403c;
        }
        .cta-btn-secondary:hover {
          border-color: #d97706;
          color: #d97706;
        }
        .cta-mailing-nudge {
          margin-top: 1rem;
        }
        .cta-mailing-label {
          font-size: 0.85rem;
          color: #a8a29e;
          margin-bottom: 0.8rem;
        }
        .cta-mailing-btn {
          display: inline-block;
          border: 1px solid #d97706;
          color: #d97706;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.55rem 1.2rem;
          text-decoration: none;
        }
        .cta-mailing-btn:hover {
          background: #d97706;
          color: #fff;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .story-hero {
            padding: 2.5rem 1.5rem;
          }
          .story-hero h1 {
            font-size: 2rem;
          }
          .story-body {
            padding: 2.5rem 1.5rem;
          }
          .story-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .story-img-col {
            position: static;
          }
          .story-quote {
            padding: 3rem 1.5rem;
          }
          .story-quote-inner p {
            font-size: 1.05rem;
          }
          .story-continued {
            padding: 2.5rem 1.5rem;
          }
          .story-cta {
            padding: 3rem 1.5rem;
          }
          .story-cta h2 {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </main>
  )
}
