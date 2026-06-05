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
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Sew Nerdy Bags Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL.split(','),
      cc: 'kevin@sewnerdybags.com',
      replyTo: email,
      subject: `Contact: ${subject}`,
      html: `
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact email error:', error);
    return Response.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
