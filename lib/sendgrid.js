//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';

import sgMail from '@sendgrid/mail';

export const sendEmail = async (to, subject, text) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to,
    from: process.env.FROM_EMAIL,
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};