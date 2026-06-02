import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, theme, direction, bagType, purpose, features, timeline, budget, notes } = data;

    if (!name || !email || !theme || !direction || !bagType || !timeline || !budget) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const featureList = Array.isArray(features) && features.length > 0
      ? features.join(', ')
      : 'None selected';

    await transporter.sendMail({
      from: `"Sew Nerdy Bags Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL.split(','),
      replyTo: email,
      subject: `Commission Request: ${theme} — ${name}`,
      html: `
        <h2>New Commission Request</h2>

        <h3>Contact</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>

        <h3>The Vision</h3>
        <p><strong>Theme / Inspiration:</strong> ${theme}</p>
        <p><strong>Creative Direction:</strong> ${direction}</p>

        <h3>The Bag</h3>
        <p><strong>Style:</strong> ${bagType}</p>
        <p><strong>Purpose:</strong> ${purpose || 'Not specified'}</p>
        <p><strong>Must-Have Features:</strong> ${featureList}</p>

        <h3>Timeline &amp; Budget</h3>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Budget:</strong> ${budget}</p>

        <h3>Additional Notes</h3>
        <p>${notes ? notes.replace(/\n/g, '<br/>') : 'None'}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Commission email error:', error);
    return Response.json({ error: 'Failed to send request' }, { status: 500 });
  }
}
