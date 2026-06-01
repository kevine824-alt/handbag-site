'use client'

export default function ContactPage() {
  return (
    <div>

      {/* ── Hero ── */}
      <div style={{ background: "#111827", borderBottom: "3px solid #d97706", padding: "2.5rem 0" }}>
        <div style={{ maxWidth: "640px", padding: "0 1rem" }}>
          <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d97706", margin: "0 0 1rem" }}>
            Get in touch
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: "0 0 1.25rem" }}>
            We'd love to<br />hear from you.
          </h1>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: 0 }}>
            Questions about our bags, upcoming shows, or anything else — send us a message and we will get back to you. For commission requests, head to the <a href="/commission" style={{ color: "#d97706", textDecoration: "none" }}>Create a Bag</a> page.
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ background: "#fafaf9", padding: "3rem 1rem 4rem" }}>
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Form — takes 2 cols */}
          <div className="lg:col-span-2">
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              <div className="grid sm:grid-cols-2 gap-4">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  <label htmlFor="name" style={labelStyle}>Name</label>
                  <input id="name" name="name" type="text" required style={inputStyle} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input id="email" name="email" type="email" required style={inputStyle} />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label htmlFor="subject" style={labelStyle}>Subject</label>
                <input id="subject" name="subject" type="text" required style={inputStyle} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea id="message" name="message" rows={6} required style={{ ...inputStyle, height: "auto", padding: "0.5rem 0.75rem", resize: "vertical" }} />
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", borderTop: "1px solid #e5e7eb", paddingTop: "1.25rem" }}>
                <button type="submit" style={{ background: "#111827", color: "#fff", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", padding: "0.75rem 2rem", border: "none", cursor: "pointer" }}>
                  Send Message
                </button>
                <p style={{ fontSize: "0.78rem", color: "#9ca3af", margin: 0 }}>
                  We will get back to you as soon as we can.
                </p>
              </div>

            </form>
          </div>

          {/* Contact info — takes 1 col */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

            <div>
              <p style={infoLabelStyle}>Email us directly</p>
              <a href="mailto:info@sewnerdybags.com" style={{ fontSize: "0.88rem", color: "#111827", textDecoration: "none", fontWeight: 600 }}>
                info@sewnerdybags.com
              </a>
            </div>

            <div>
              <p style={infoLabelStyle}>Follow along</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a href="https://www.instagram.com/sewnerdybags/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                  Instagram
                </a>
                <a href="https://www.facebook.com/sewnerdybags/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>

            <div>
              <p style={infoLabelStyle}>Looking for something specific?</p>
              <p style={{ fontSize: "0.83rem", color: "#6b7280", lineHeight: 1.6, margin: "0 0 0.5rem" }}>
                For custom bag requests and commissions, use the dedicated form on our Create a Bag page.
              </p>
              <a href="/commission" style={{ fontSize: "0.78rem", fontWeight: 700, color: "#d97706", textDecoration: "none", letterSpacing: "0.04em" }}>
                Start a commission →
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

const labelStyle = {
  fontSize: "0.78rem",
  fontWeight: 600,
  color: "#374151",
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

const infoLabelStyle = {
  fontSize: "0.67rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#d97706",
  borderBottom: "1px solid #e5e7eb",
  paddingBottom: "0.4rem",
  marginBottom: "0.75rem",
};

const socialLinkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.85rem",
  color: "#374151",
  textDecoration: "none",
  fontWeight: 500,
};
