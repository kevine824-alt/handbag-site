'use client'

import Link from "next/link";
import { useState } from 'react';

export default function CommissionPage() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const features = Array.from(form.querySelectorAll('input[name="features"]:checked')).map(el => el.value);
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone?.value || '',
      theme: form.theme.value,
      direction: form.direction.value,
      bagType: form.bagType.value,
      purpose: form.purpose?.value || '',
      features,
      timeline: form.timeline.value,
      budget: form.budget.value,
      notes: form.notes?.value || '',
    };
    try {
      const res = await fetch('/api/commission', {
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

          {/* Text column — first on mobile, left on desktop */}
          <div className="flex flex-col justify-center gap-5 p-8 lg:p-14 order-1 lg:order-1">

            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d97706", margin: 0 }}>
              Made for you &nbsp;·&nbsp; One of one &nbsp;·&nbsp; Unapologetically nerdy
            </p>

            <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: 0 }}>
              Commission a<br />One-of-One Bag
            </h1>

            <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: 0 }}>
              A commission is a collaboration. You bring the idea, the theme, or the need.
              We bring the design, materials, and craftsmanship. Together, we make something
              that exists nowhere else.
            </p>

            {/* Cards */}
            <div className="flex flex-col gap-3">
              {[
                { label: "What you can request", text: "A bag inspired by a fandom, theme, or aesthetic. A custom version of an existing Sew Nerdy style. A gift piece with personal touches. Or something from scratch.", accent: "#d97706" },
                { label: "What to expect", text: "A free consultation to talk through your idea. Clear pricing before any work begins. A deposit to start. Timelines based on complexity and our current queue.", accent: "#d97706" },
                { label: "A quick note", text: "Some details depend on materials and availability. If you're open to our creative direction, the result is often even better than the original idea.", accent: "#4b5563" },
              ].map(({ label, text, accent }) => (
                <div key={label} style={{ borderLeft: `3px solid ${accent}`, padding: "0.65rem 1rem", background: "rgba(255,255,255,0.04)" }}>
                  <span style={{ display: "block", fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: accent, marginBottom: "0.3rem" }}>{label}</span>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Photo column — below text on mobile, right on desktop */}
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
      <div id="commission-form" style={{ background: "#fafaf9", padding: "3.5rem 0 4rem" }}>

        <div style={{ maxWidth: "680px" }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d97706", margin: "0 0 0.4rem" }}>Commission Request</p>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#111827", lineHeight: 1.15, margin: "0 0 0.55rem" }}>Tell us about your bag.</h2>
          <p style={{ fontSize: "0.87rem", color: "#6b7280", lineHeight: 1.7, margin: "0 0 2.5rem" }}>
            Share a few details and we will get back to you with next steps. Consultation is free. Pricing is agreed before any work begins. A deposit is required to start.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

            {/* 1. The vision */}
            <div>
              <div style={groupLabel}>The vision</div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="sm:col-span-2">
                  <label htmlFor="theme" style={labelStyle}>What is the theme or inspiration for your bag?</label>
                  <input id="theme" name="theme" type="text" required placeholder='e.g. "retro gaming", "Studio Ghibli", "coastal", "gift for my mom"' style={inputStyle} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="direction" style={labelStyle}>How much creative freedom should we have?</label>
                  <select id="direction" name="direction" required defaultValue="" style={inputStyle}>
                    <option value="" disabled>Select one</option>
                    <option value="specific">Very specific — I know exactly what I want</option>
                    <option value="balanced">Balanced — some direction, some creative freedom</option>
                    <option value="surprise">Surprise me — full creative freedom</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 2. The bag */}
            <div>
              <div style={groupLabel}>The bag</div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="bagType" style={labelStyle}>What style of bag?</label>
                  <select id="bagType" name="bagType" required defaultValue="" style={inputStyle}>
                    <option value="" disabled>Select one</option>
                    <option value="tote">Tote</option>
                    <option value="crossbody">Crossbody</option>
                    <option value="backpack">Backpack</option>
                    <option value="pouch">Pouch / small accessory</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="purpose" style={labelStyle}>What will you use it for? <span style={optStyle}>(optional)</span></label>
                  <select id="purpose" name="purpose" defaultValue="" style={inputStyle}>
                    <option value="">Select one</option>
                    <option value="everyday">Everyday carry</option>
                    <option value="travel">Travel</option>
                    <option value="work">Work / laptop</option>
                    <option value="gift">Gift</option>
                    <option value="event">Convention / event</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 3. Features */}
            <div>
              <div style={groupLabel}>Must-have features <span style={optStyle}>(optional)</span></div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {[
                  ["zipperTop", "Zipper top"],
                  ["exteriorPocket", "Exterior pocket"],
                  ["interiorPockets", "Interior pocket(s)"],
                  ["keyClip", "Key clip"],
                  ["bottlePocket", "Water bottle pocket"],
                  ["adjustableStrap", "Adjustable strap"],
                  ["divider", "Divider / organizer"],
                ].map(([id, label]) => (
                  <label key={id} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#374151", cursor: "pointer" }}>
                    <input type="checkbox" id={id} name="features" value={id} style={{ width: "1rem", height: "1rem", accentColor: "#d97706", flexShrink: 0 }} />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {/* 4. Timeline & budget */}
            <div>
              <div style={groupLabel}>Timeline &amp; budget</div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="timeline" style={labelStyle}>Do you have a timeline?</label>
                  <select id="timeline" name="timeline" required defaultValue="" style={inputStyle}>
                    <option value="" disabled>Select one</option>
                    <option value="no-rush">No rush</option>
                    <option value="2-4">Need it in about 2–4 weeks</option>
                    <option value="4-8">Need it in about 4–8 weeks</option>
                    <option value="specific">I have a specific date in mind</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" style={labelStyle}>What is your budget range?</label>
                  <select id="budget" name="budget" required defaultValue="" style={inputStyle}>
                    <option value="" disabled>Select one</option>
                    <option value="under-150">Under $150</option>
                    <option value="150-250">$150–$250</option>
                    <option value="250-400">$250–$400</option>
                    <option value="400-plus">$400+</option>
                    <option value="not-sure">Not sure — I'd like guidance</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 5. Contact */}
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

            {/* 6. Notes */}
            <div>
              <div style={groupLabel}>Anything else? <span style={optStyle}>(optional)</span></div>
              <div className="mt-4">
                <textarea id="notes" name="notes" rows={4} placeholder="Reference images, specific fabrics, colors, sizing needs — anything that helps us understand your vision." style={{ ...inputStyle, height: "auto", padding: "0.5rem 0.75rem", resize: "vertical" }} />
              </div>
            </div>

            {/* Submit */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", borderTop: "1px solid #e5e7eb", paddingTop: "1.25rem" }}>
              <button type="submit" disabled={status === 'sending'} style={{ background: "#111827", color: "#fff", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", padding: "0.75rem 2rem", border: "none", cursor: status === 'sending' ? 'wait' : 'pointer', opacity: status === 'sending' ? 0.7 : 1 }}>
                {status === 'sending' ? 'Sending...' : 'Send My Request'}
              </button>
              {status === 'success' && <p style={{ fontSize: "0.83rem", color: "#16a34a", margin: 0, fontWeight: 600 }}>Request received. We will be in touch to discuss next steps.</p>}
              {status === 'error' && <p style={{ fontSize: "0.83rem", color: "#dc2626", margin: 0 }}>Something went wrong. Please try again or email buildabag@sewnerdybags.com directly.</p>}
              {status === 'idle' && <p style={{ fontSize: "0.78rem", color: "#9ca3af", margin: 0 }}>We will review your request and reach out to discuss next steps. A deposit is required to hold your spot.</p>}
            </div>

          </form>
        </div>
      </div>

    </div>
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

/* Simple field component */
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
