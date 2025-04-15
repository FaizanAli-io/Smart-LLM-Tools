import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailsService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // your_email@gmail.com
        pass: process.env.GMAIL_APP_PASSWORD, // app password, not your Gmail password
      },
    });
  }

  async sendVerificationEmail(email: string, token: string): Promise<void> {
    const verificationUrl = `${process.env.APP_URL}/auth/verify-email?token=${token}`;

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
      console.log('Email sent:', info.response);
    } catch (error) {
      console.error('Error sending verification email:', error);
      throw new Error('Failed to send verification email');
    }
  }

  async sendResetPasswordEmail(email: string, token: string): Promise<void> {
    const resetUrl = `${process.env.APP_URL}/auth/reset-password?token=${token}`;

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
      console.log('Reset password email sent:', info.response);
    } catch (error) {
      console.error('Error sending reset password email:', error);
      throw new Error('Failed to send reset password email');
    }
  }
}
