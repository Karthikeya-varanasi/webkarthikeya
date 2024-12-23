// // pages/api/contact.js

// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, mobile, service, message } = req.body;

//     // Validation: Check if all fields are present
//     if (!name || !email || !mobile || !service || !message) {
//       return res.status(400).json({ error: 'All fields are required.' });
//     }

//     console.log(name, email, mobile, service, message);

//     try {
//       // Set up nodemailer transporter
//       const transporter = nodemailer.createTransport({
//         service: 'gmail', // Replace with your email provider
//         auth: {
//           user: "karthikvaranasi07@gmail.com", // Use environment variables for security
//           pass: "txxdldbtmzjidivm",
//         },
//       });

//       // Email options
//       const mailOptions = {
//         from: "karthikvaranasi07@gmail.com",
//         to: 'srinivasareddybobba208@gmail.com', // Replace with recipient email
//         subject: `New Contact Form Submission - ${service}`,
//         text: `
//           Name: ${name}
//           Email: ${email}
//           Mobile: ${mobile}
//           Service: ${service}
//           Message: ${message}
//         `,
//       };

//       // Send email
//       await transporter.sendMail(mailOptions);
//       return res.status(200).json({ message: 'Message sent successfully!' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).json({ error: 'Failed to send message.' });
//     }
//   } else {
//     // Handle non-POST requests
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }

import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json(); // Parse JSON request body
    const { name, email, mobile, service, message } = body;

    if (!name || !email || !mobile || !service || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log(name, email, mobile, service, message,"test");

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider
      auth: {
        user: "contact.webkarthikeya@gmail.com", // Use environment variables for security
         pass: "atjwdpdozbkeqfzt",
      },
    });

    // const mailOptions = {
    //   from: email,
    //   to: "karthikvaranasi07@gmail.com", // Replace with recipient email
    //   subject: `New Contact Form Submission: ${service}`,
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Mobile: ${mobile}
    //     Service: ${service}
    //     Message: ${message}
    //   `,
    // };

    // await transporter.sendMail(mailOptions);



    const notificationMailOptions = {
      from: email, // User's email (sender)
      to: 'contact.webkarthikeya@gmail.com', // Your email (recipient)
      subject: `New Contact Form Submission: ${service}`,
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Service: ${service}
        Message: ${message}
      `,
    };

    // Email to the user (Thank You Message)
    const thankYouMailOptions = {
      from: "karthikvaranasi07@gmail.com", // Your email
      to: email, // User's email (recipient)
      subject: 'Thank You for Contacting Us!',
      text: `
        Dear ${name},

        Thank you for reaching out to us regarding "${service}". We have received your message and will get back to you shortly.

        Here is a copy of your message:
        -------------------------
        ${message}
        -------------------------

        If you need immediate assistance, feel free to contact us at contact.webkarthikeya@gmail.com .

        Best regards,
        Karthikeya Varanasi
      `,
    };

    // Send both emails
    await transporter.sendMail(notificationMailOptions); // Sends to you
    await transporter.sendMail(thankYouMailOptions); // Sends to the user

    return new Response(
      JSON.stringify({ message: 'Message sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in POST handler:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

