'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const SHOWS = [
  {
    id: 1,
    label: 'Next Up',
    name: 'Dragon Con 2025',
    dates: 'Aug 28 – Sep 1',
    location: 'Atlanta, GA',
    details: 'Find us in the vendor hall. Look for the holographic circuit board bags.',
    image: '/images/shows/dragon-con-bag.jpg',
    imageAlt: 'Dragon Con 40 — crimson quilted bag',
  },
  {
    id: 2,
    label: 'Coming Up',
    name: 'AWA 2025',
    dates: 'Oct 17 – 19',
    location: 'Atlanta, GA',
    details: 'Anime Weekend Atlanta — our second home. New fall colorways dropping here first.',
    image: '/images/shows/dragons-atlanta.jpg',
    imageAlt: 'Dragons Over Atlanta — Dragon Con exclusive bags',
  },
  {
    id: 3,
    label: 'On the Horizon',
    name: 'Holiday Con 2025',
    dates: 'Dec TBD',
    location: 'Southeast',
    details: 'Holiday show dates TBA — follow us on social for announcements.',
    image: '/images/shows/dragon-con-bag-2.jpg',
    imageAlt: 'Sew Nerdy Bags at convention',
  },
]

export default function ShowsPage() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback(
    (index) => {
      if (animating || index === active) return
      setAnimating(true)
      setTimeout(() => {
        setActive(index)
        setAnimating(false)
      }, 220)
    },
    [active, animating]
  )

  const prev = () => goTo((active - 1 + SHOWS.length) % SHOWS.length)
  const next = () => goTo((active + 1) % SHOWS.length)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % SHOWS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const show = SHOWS[active]

  return (
    <main>
      {/* ── SPLIT HERO ── */}
      <section className="shows-hero">
        <div className="shows-hero-text">
          <span className="eyebrow">Convention Circuit</span>
          <h1>We go where<br />the nerds are.</h1>
          <p className="hero-quote">
            Find us at cons across the Southeast and beyond — come see the bags in person before you buy.
          </p>

          <div className={`show-card ${animating ? 'fade-out' : 'fade-in'}`}>
            <p className="show-card-label">{show.label}</p>
            <p className="show-card-name">{show.name}</p>
            <p className="show-card-meta">{show.dates}&nbsp;&nbsp;·&nbsp;&nbsp;{show.location}</p>
            <p className="show-card-details">{show.details}</p>
          </div>

          <div className="slider-controls">
            <button onClick={prev} aria-label="Previous show" className="slider-btn">&#8592;</button>
            <div className="slider-dots">
              {SHOWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to show ${i + 1}`}
                  className={`dot ${i === active ? 'dot-active' : ''}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next show" className="slider-btn">&#8594;</button>
          </div>
        </div>

        <div className={`shows-hero-img ${animating ? 'fade-out' : 'fade-in'}`}>
          <Image
            src={show.image}
            alt={show.imageAlt}
            fill
            sizes="50vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="shows-stats">
        <div className="stat">
          <span className="stat-num">15+</span>
          <span className="stat-label">Cons per year</span>
        </div>
        <div className="stat">
          <span className="stat-num">SE + Beyond</span>
          <span className="stat-label">Convention circuit</span>
        </div>
        <div className="stat">
          <span className="stat-num">Live</span>
          <span className="stat-label">See them in person</span>
        </div>
      </div>

      {/* ── CON HISTORY ── */}
      <section className="con-history">
        <p className="section-eyebrow">Con history</p>
        <h2>Where we&rsquo;ve been</h2>
        <div className="history-cards">
          <div className="history-card">
            <div className="history-card-img">
              <Image
                src="/images/shows/booth.jpg"
                alt="Sew Nerdy Bags booth at Dragon Con"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="history-card-body">
              <p className="card-tag">Booth life</p>
              <p className="card-title">The full setup</p>
              <p className="card-desc">Our full booth spread — every bag on display, ready to handle before you commit.</p>
            </div>
          </div>

          <div className="history-card">
            <div className="history-card-img">
              <Image
                src="/images/shows/dragons-atlanta.jpg"
                alt="Dragons Over Atlanta — exclusive Dragon Con bags"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="history-card-body">
              <p className="card-tag">Dragon Con Exclusive</p>
              <p className="card-title">Dragons Over Atlanta</p>
              <p className="card-desc">Limited con-exclusive colorways only available at our Dragon Con booth. Don&rsquo;t miss them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <div className="shows-cta">
        <h3>Coming to a con near you?</h3>
        <p>Follow along for announcements, sneak peeks, and limited-run drops at each show.</p>
      </div>

      <style jsx>{`
        .shows-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 500px;
        }
        .shows-hero-text {
          background: #f5f5f4;
          padding: 3.5rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
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
        .shows-hero-text h1 {
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 1rem;
          color: #111;
        }
        .hero-quote {
          border-left: 3px solid #d97706;
          padding-left: 1rem;
          font-style: italic;
          color: #57534e;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.8rem;
        }
        .show-card {
          background: #fff;
          border: 1px solid #e7e5e4;
          padding: 1.2rem 1.4rem;
          margin-bottom: 1.2rem;
        }
        .show-card-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #d97706;
          margin-bottom: 0.3rem;
        }
        .show-card-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 0.2rem;
        }
        .show-card-meta {
          font-size: 0.82rem;
          color: #78716c;
          margin-bottom: 0.5rem;
        }
        .show-card-details {
          font-size: 0.83rem;
          color: #57534e;
          line-height: 1.5;
        }
        .slider-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .slider-btn {
          background: none;
          border: 1px solid #d6d3d1;
          color: #111;
          width: 2rem;
          height: 2rem;
          cursor: pointer;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
        }
        .slider-btn:hover {
          background: #e7e5e4;
        }
        .slider-dots {
          display: flex;
          gap: 0.4rem;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: #d6d3d1;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s;
        }
        .dot-active {
          background: #d97706;
        }
        .shows-hero-img {
          position: relative;
          min-height: 500px;
          overflow: hidden;
        }
        .fade-in {
          opacity: 1;
          transition: opacity 0.22s ease-in;
        }
        .fade-out {
          opacity: 0;
          transition: opacity 0.22s ease-out;
        }
        .shows-stats {
          background: #111;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .stat {
          padding: 1.6rem 2rem;
          border-right: 1px solid #2a2a2a;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .stat:last-child {
          border-right: none;
        }
        .stat-num {
          font-size: 1.6rem;
          font-weight: 700;
          color: #d97706;
        }
        .stat-label {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a8a29e;
        }
        .con-history {
          padding: 4rem 3rem;
          background: #fff;
        }
        .section-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #d97706;
          margin-bottom: 0.6rem;
        }
        .con-history h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 2.5rem;
        }
        .history-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .history-card {
          border: 1px solid #e7e5e4;
          overflow: hidden;
        }
        .history-card-img {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        .history-card-body {
          padding: 1.2rem 1.4rem;
        }
        .card-tag {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #d97706;
          margin-bottom: 0.4rem;
        }
        .card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 0.4rem;
        }
        .card-desc {
          font-size: 0.83rem;
          color: #78716c;
          line-height: 1.5;
        }
        .shows-cta {
          background: #f5f5f4;
          padding: 3rem 3rem;
          text-align: center;
          border-top: 3px solid #d97706;
        }
        .shows-cta h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 0.6rem;
        }
        .shows-cta p {
          color: #57534e;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .shows-hero {
            grid-template-columns: 1fr;
          }
          .shows-hero-img {
            min-height: 280px;
            order: -1;
          }
          .shows-hero-text {
            padding: 2rem 1.5rem;
          }
          .shows-hero-text h1 {
            font-size: 1.8rem;
          }
          .shows-stats {
            grid-template-columns: 1fr;
          }
          .stat {
            border-right: none;
            border-bottom: 1px solid #2a2a2a;
          }
          .stat:last-child {
            border-bottom: none;
          }
          .history-cards {
            grid-template-columns: 1fr;
          }
          .con-history {
            padding: 2.5rem 1.5rem;
          }
          .shows-cta {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </main>
  )
}
