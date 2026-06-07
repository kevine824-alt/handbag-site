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
    const { name, email, phone, bag, notes } = data;

    if (!name || !email || !bag) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Sew Nerdy Bags Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL.split(','),
      cc: 'kevin@sewnerdybags.com',
      replyTo: email,
      subject: `Order Request: ${bag} — ${name}`,
      html: `
        <h2>New Order Request</h2>

        <h3>Contact</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>

        <h3>Bag Requested</h3>
        <p><strong>Bag:</strong> ${bag}</p>

        <h3>Additional Notes</h3>
        <p>${notes ? notes.replace(/\n/g, '<br/>') : 'None'}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Order request email error:', error);
    return Response.json({ error: 'Failed to send request' }, { status: 500 });
  }
}
