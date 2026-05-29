'use client'

export default function MailingListPage() {
  return (
    <main>
      <section className="ml-hero">
        <div className="ml-hero-inner">
          <p className="ml-eyebrow">Never miss a show</p>
          <h1>Be the first to know.</h1>
          <p className="ml-sub">
            Sew Nerdy Bags shows up at conventions and events across the Southeast. Sign up and we will let you know where we are headed next, when new designs drop, and when commission spots open up.
          </p>
          <div className="ml-form-wrap">
            <div className="klaviyo-form-XdKNJt"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .ml-hero {
          background: radial-gradient(ellipse at center, #7a3a00 0%, #2a1500 40%, #111 100%);
          border-bottom: 3px solid #d97706;
          padding: 4rem 3rem 4rem;
          min-height: 60vh;
          display: flex;
          align-items: center;
        }
        .ml-hero-inner {
          max-width: 640px;
          width: 100%;
        }
        .ml-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #d97706;
          margin-bottom: 1rem;
        }
        .ml-hero h1 {
          font-size: 2.8rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .ml-sub {
          font-size: 1rem;
          color: #fff;
          opacity: 0.8;
          line-height: 1.7;
          max-width: 520px;
          margin-bottom: 2rem;
        }
        .ml-form-wrap {
          max-width: 520px;
        }

        @media (max-width: 768px) {
          .ml-hero {
            padding: 2.5rem 1.5rem;
            min-height: auto;
          }
          .ml-hero h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  )
}
