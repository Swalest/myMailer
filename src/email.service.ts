import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import { EmailOptions } from './email.interfac';
dotenv.config();

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USERNAME || "Swalest",
        pass: process.env.SMTP_PASSWORD ||"86429",
      },
    });
  }

  async sendEmail(options: EmailOptions): Promise<void> {
    try {
      const { to, subject, html } = options;
      const info = await this.transporter.sendMail({
        from: process.env.FROM_EMAIL || "swalest.watega@gmail.com",
        to,
        subject,
        html,
      });
      console.log('Email sent:', info.response);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email. Please try again later.');
    }
  }
}