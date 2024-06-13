// import nodemailer from 'nodemailer';
import { EmailRequest } from '../../types';
// import { compileEmailTemplate } from '..';

// let transporter = nodemailer.createTransport({
//   host: 'smtp.example.com',
//   port: 587,
//   secure: false, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     // for this task we will mock an user and a password
//     user: 'user@example.com',
//     pass: 'password'
//   }
// });

export const sendEmail = async (mailRequest: EmailRequest) => {
  console.log('Sending email to:', mailRequest.email);

  // const mailOptions = {
  //   from: 'no-reply@example.com',
  //   to: mailRequest.email,
  //   bcc: mailRequest.bcc,
  //   subject: mailRequest.subject,
  //   html: compileEmailTemplate(mailRequest.body_data),
  //   key: mailRequest.key
  // };

  // const info = await transporter.sendMail(mailOptions);
  // console.log('Message sent: %s', info.messageId);
  // return info;
};
