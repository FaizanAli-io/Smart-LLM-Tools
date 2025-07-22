import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailsService {
  private transporter: nodemailer.Transporter;

  constructor() {
    console.log('📨 Initializing Email Transporter...');
    console.log('GMAIL_USER:', process.env.GMAIL_USER);
    console.log('APP_URL:', process.env.APP_URL);

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify the transporter
    this.transporter.verify((error, success) => {
      if (error) {
        console.error('❌ Transporter verification failed:', error);
      } else {
        console.log('✅ Transporter is ready to send emails.');
      }
    });
  }

  async sendVerificationEmail(email: string, token: string): Promise<void> {
    const verificationUrl = `${process.env.APP_URL}/auth/verify-email?token=${token}`;

    console.log(`📧 Preparing to send verification email to ${email}`);
    console.log('🔗 Verification URL:', verificationUrl);

    const mailOptions = {
      from: `"Smart LLM Tools" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Verify Your Email',
      html: `
        <h2>Please verify your email</h2>
        <p>Click the link below to verify your email address:</p>
        <a href="${verificationUrl}">Verify Email</a>
        <p>This link will expire in 24 hours.</p>
      `,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('✅ Verification email sent successfully!');
      console.log('SMTP Response:', info.response);
    } catch (error) {
      console.error('❌ Failed to send verification email');
      console.error('Error message:', error.message);
      console.error('Full error:', error);
      throw new Error('Failed to send verification email');
    }
  }

  async sendResetPasswordEmail(email: string, token: string): Promise<void> {
    const resetUrl = `${process.env.APP_URL}/auth/reset-password?token=${token}`;

    console.log(`📧 Preparing to send reset password email to ${email}`);
    console.log('🔗 Reset Password URL:', resetUrl);

    const mailOptions = {
      from: `"Smart LLM Tools" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Reset Your Password',
      html: `
        <h2>Reset your password</h2>
        <p>Click the link below to reset your password:</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
      `,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('✅ Reset password email sent successfully!');
      console.log('SMTP Response:', info.response);
    } catch (error) {
      console.error('❌ Failed to send reset password email');
      console.error('Error message:', error.message);
      console.error('Full error:', error);
      throw new Error('Failed to send reset password email');
    }
  }
}
