# GraphAI Website

This is the official website for GraphAI, a company specializing in graph-based AI solutions.

## Features

- Modern, responsive design using React and Tailwind CSS
- Interactive components and smooth user experience
- Contact form that sends inquiries to info@graphai.ca

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/graphai.git
   cd graphai
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Setting Up Email Functionality

The contact form uses EmailJS to send emails directly from the client-side to your inbox. Follow these steps to set it up:

1. Sign up for an account at [EmailJS](https://www.emailjs.com/)

2. Create an Email Service:
   - Go to "Email Services" in your EmailJS dashboard
   - Add a new service and connect it to your email provider (Gmail, Outlook, etc.)
   - Note down the Service ID

3. Create an Email Template:
   - Go to "Email Templates" in your EmailJS dashboard
   - Create a new template with the following variables:
     - `from_name`: The sender's name
     - `from_email`: The sender's email address
     - `company`: The sender's company
     - `message`: The message content
   - Design your email template as needed
   - Set the recipient to info@graphai.ca
   - Note down the Template ID

4. Update the credentials in the Contact page:
   - Open `src/pages/Contact.jsx`
   - Replace the placeholder values with your actual credentials:
     ```jsx
     const EMAILJS_USER_ID = 'YOUR_USER_ID'; // Replace with your actual EmailJS user ID
     const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your actual EmailJS service ID
     const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your actual EmailJS template ID
     ```

5. Test the form to ensure emails are being sent correctly

## Deployment

To deploy the website to your hosting provider:

1. Build the production version
   ```
   npm run build
   ```

2. The built files will be in the `dist` directory

3. Upload these files to your web hosting provider

4. Configure your domain (graphai.ca) to point to your hosting provider

## Technologies Used

- React.js
- Tailwind CSS
- EmailJS
- Vite

## Support

For any issues or questions, please contact:
- Email: info@graphai.ca
