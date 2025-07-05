// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Add your email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  serviceID: 'YOUR_SERVICE_ID',      // From EmailJS Dashboard > Email Services
  templateID: 'template_xzfw5ws',    // Your EmailJS Template ID
  publicKey: 'YHEC8KVwieilW0Kiy'     // Your EmailJS Public Key
};

// Example template for EmailJS:
// Subject: New Contact Form Message from {{from_name}}
// Body:
// Name: {{from_name}}
// Email: {{from_email}}
// Message: {{message}}
// 
// This message was sent from your portfolio website contact form.
