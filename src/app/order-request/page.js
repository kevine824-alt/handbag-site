'use client'

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function OrderRequestForm() {
  const searchParams = useSearchParams();
  const [bag, setBag] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const bagParam = searchParams.get('bag');
    if (bagParam) setBag(bagParam);
    else setBag('Pensacola Pride Bag 2026');
  }, [searchParams]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone?.value || '',
      bag: form.bag.value,
      notes: form.notes?.value || '',
    };
    try {
      const res = await fetch('/api/order-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div>

      {/* ── Hero ── */}
      <div style={{ background: "#111827", borderBottom: "3px solid #d97706" }}>
        <div className="grid lg:grid-cols-2">

          {/* Text column */}
          <div className="flex flex-col justify-center gap-5 p-8 lg:p-14 order-1 lg:order-1">

            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d97706", margin: 0 }}>
              Seen something you love?
            </p>

            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: 0 }}>
              Request to Order<br />a Bag
            </h1>

            <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: 0 }}>
              Spotted a bag in our gallery that you have to have? Send us a request and we will
              be in touch to talk through availability, timeline, and next steps.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { label: "How it works", text: "Fill out the form below with the bag you are interested in and any questions or notes. We will follow up directly to discuss availability and pricing.", accent: "#d97706" },
                { label: "Good to know", text: "Each bag is one of a kind. If the exact bag is no longer available, we may be able to make something very similar. Just let us know what you are looking for.", accent: "#d97706" },
                { label: "A quick note", text: "Response times may vary based on our current queue and convention schedule. We will always get back to you.", accent: "#4b5563" },
              ].map(({ label, text, accent }) => (
                <div key={label} style={{ borderLeft: `3px solid ${accent}`, padding: "0.65rem 1rem", background: "rgba(255,255,255,0.04)" }}>
                  <span style={{ display: "block", fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: accent, marginBottom: "0.3rem" }}>{label}</span>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Photo column */}
          <div className="order-2 lg:order-2" style={{ minHeight: "280px" }}>
            <img
              src="/images/commission.jpg"
              alt="Sew Nerdy Bags at a convention"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }}
            />
          </div>

        </div>
      </div>

      {/* ── Form ── */}
      <div style={{ background: "#fafaf9", padding: "3.5rem 0 4rem" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d97706", margin: "0 0 0.4rem" }}>Order Request</p>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#111827", lineHeight: 1.15, margin: "0 0 0.55rem" }}>Tell us what you are looking for.</h2>
          <p style={{ fontSize: "0.87rem", color: "#6b7280", lineHeight: 1.7, margin: "0 0 2.5rem" }}>
            Share your details and which bag caught your eye. We will be in touch to talk through availability and next steps.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

            {/* The bag */}
            <div>
              <div style={groupLabel}>Which bag?</div>
              <div className="mt-4">
                <label htmlFor="bag" style={labelStyle}>Select a bag</label>
                <select
                  id="bag"
                  name="bag"
                  required
                  value={bag}
                  onChange={e => setBag(e.target.value)}
                  style={inputStyle}
                >
                  <option value="Pensacola Pride Bag 2026">Pensacola Pride Bag 2026</option>
                </select>
              </div>
            </div>

            {/* Contact */}
            <div>
              <div style={groupLabel}>How to reach you</div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <Field id="name" label="Name" type="text" required />
                <Field id="email" label="Email" type="email" required />
                <div className="sm:col-span-2">
                  <Field id="phone" label="Phone" type="tel" optional />
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <div style={groupLabel}>Anything else? <span style={optStyle}>(optional)</span></div>
              <div className="mt-4">
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Questions, timeline, whether you are open to a similar piece if this one is unavailable — anything helpful."
                  style={{ ...inputStyle, height: "auto", padding: "0.5rem 0.75rem", resize: "vertical" }}
                />
              </div>
            </div>

            {/* Submit */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", borderTop: "1px solid #e5e7eb", paddingTop: "1.25rem" }}>
              <button
                type="submit"
                disabled={status === 'sending'}
                style={{ background: "#111827", color: "#fff", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", padding: "0.75rem 2rem", border: "none", cursor: status === 'sending' ? 'wait' : 'pointer', opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? 'Sending...' : 'Send My Request'}
              </button>
              {status === 'success' && <p style={{ fontSize: "0.83rem", color: "#16a34a", margin: 0, fontWeight: 600 }}>Request received. We will be in touch shortly.</p>}
              {status === 'error' && <p style={{ fontSize: "0.83rem", color: "#dc2626", margin: 0 }}>Something went wrong. Please try again or email buildabag@sewnerdybags.com directly.</p>}
              {status === 'idle' && <p style={{ fontSize: "0.78rem", color: "#9ca3af", margin: 0 }}>We will review your request and reach out to discuss availability and next steps.</p>}
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}

export default function OrderRequestPage() {
  return (
    <Suspense>
      <OrderRequestForm />
    </Suspense>
  );
}

/* ── Shared style objects ── */
const groupLabel = {
  fontSize: "0.67rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#d97706",
  borderBottom: "1px solid #e5e7eb",
  paddingBottom: "0.4rem",
};

const labelStyle = {
  display: "block",
  fontSize: "0.78rem",
  fontWeight: 600,
  color: "#374151",
  marginBottom: "0.3rem",
};

const optStyle = {
  fontWeight: 400,
  color: "#9ca3af",
};

const inputStyle = {
  display: "block",
  width: "100%",
  height: "2.6rem",
  border: "1px solid #d1d5db",
  background: "#fff",
  padding: "0 0.75rem",
  fontSize: "0.875rem",
  color: "#111827",
  fontFamily: "inherit",
  outline: "none",
};

function Field({ id, label, type = "text", required = false, optional = false }) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label} {optional && <span style={optStyle}>(optional)</span>}
      </label>
      <input id={id} name={id} type={type} required={required} style={inputStyle} />
    </div>
  );
}
