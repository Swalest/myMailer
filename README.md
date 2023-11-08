index.ts# myMailer
the mail management with nodemailer
# Nodemailer Professional Mails Package for Nest.js

This package provides a convenient way to send professional mails or personalized background professional mails using Nodemailer in a Nest.js application.

## Installation

To install the package, run the following command:

```bash
npm install mymailer@1.0.0
```

## Usage

1. Import the `EmailService` from the package:

```typescript
import { EmailService } from 'mymailer';
```

2. Create an instance of the `EmailService` class:

```typescript
const emailService = new EmailService();
```

3. Use the `sendEmail()` method to send professional mails:

```typescript
const emailOptions = {
  to: 'example@example.com',
  subject: 'Hello from Nodemailer',
  html: '<p>This is a professional mail sent using Nodemailer.</p>',
};

emailService.sendEmail(emailOptions)
  .then(() => {
    console.log('Email sent successfully!');
  })
  .catch((error) => {
    console.error('Failed to send email:', error);
  });
```

## Configuration

Before using the package, make sure to configure the SMTP server settings in your Nest.js application's environment variables. Set the following variables:

- `SMTP_HOST`: The hostname of the SMTP server.
- `SMTP_PORT`: The port number of the SMTP server.
- `SMTP_USERNAME`: The username for SMTP authentication.
- `SMTP_PASSWORD`: The password for SMTP authentication.
- `FROM_EMAIL`: The email address from which the mails will be sent.

## License

This package is unlicensed