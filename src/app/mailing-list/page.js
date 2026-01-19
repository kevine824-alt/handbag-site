export default function MailingListPage() {
  return (
    <div>
      <h1>Mailing List</h1>
      <p>
        Get occasional updates on new one-of-a-kind bags, upcoming shows, and studio
        news. No spam — just the good stuff.
      </p>

      <form style={{ marginTop: 24, maxWidth: 420 }}>
        <label style={{ display: "block", marginBottom: 8 }}>
          Email address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          style={{
            width: "100%",
            padding: 12,
            border: "1px solid #ccc",
            borderRadius: 6,
            marginBottom: 12,
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 14px",
            borderRadius: 6,
            border: "1px solid #111",
            background: "#111",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Join the list
        </button>
      </form>
    </div>
  );
}