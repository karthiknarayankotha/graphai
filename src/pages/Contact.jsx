import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Set your EmailJS user ID, service ID, and template ID
// You'll need to sign up for an EmailJS account at https://www.emailjs.com/
const EMAILJS_USER_ID = 'YOUR_USER_ID'; // Replace with your actual EmailJS user ID
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your actual EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your actual EmailJS template ID

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);
  const [error, setError] = useState(null);

  // Initialize EmailJS with your user ID
  useEffect(() => {
    emailjs.init(EMAILJS_USER_ID);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setError(null);
    
    try {
      // For demonstration purposes, we'll show a reminder to set up EmailJS
      if (EMAILJS_USER_ID === 'YOUR_USER_ID') {
        setTimeout(() => {
          setFormStatus('demo');
        }, 1500);
        return;
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        message: formData.message,
        to_email: 'info@graphai.ca', // This is for reference, actual recipient is set in EmailJS
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      // Email sent successfully
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send your message. Please try again later.');
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative py-16 bg-gradient-to-r from-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
              Have questions about our services? We're here to help.
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact information */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get in touch</h2>
              <p className="mt-4 text-lg text-gray-500">
                We'd love to hear from you. Please fill out the form or reach out to us directly using the contact information below.
              </p>

              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="text-base font-medium text-gray-900">Email</dt>
                  <dd className="mt-1">
                    <a href="mailto:info@graphai.ca" className="text-blue-600 hover:text-blue-500">
                      info@graphai.ca
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-medium text-gray-900">Response time</dt>
                  <dd className="mt-1 text-gray-500">We aim to respond within 24-48 hours during business days.</dd>
                </div>
              </dl>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">Our services</h3>
                <ul className="mt-4 list-disc list-inside text-gray-500 space-y-2">
                  <li>Graph Data Modeling</li>
                  <li>Graph Analytics</li>
                  <li>Graph-Based Machine Learning</li>
                  <li>Custom Graph Software Development</li>
                  <li>Consulting & Training</li>
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="mt-2">We've received your inquiry and will get back to you shortly.</p>
                </div>
              )}

              {formStatus === 'demo' && (
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 p-4 rounded">
                  <p className="font-medium">Demo Mode</p>
                  <p className="mt-2">To enable actual email sending, you need to:</p>
                  <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>Sign up for an account at <a href="https://www.emailjs.com/" className="underline" target="_blank" rel="noopener noreferrer">EmailJS</a></li>
                    <li>Create an Email Service and connect it to your email provider</li>
                    <li>Create an Email Template</li>
                    <li>Update the Contact.jsx file with your IDs</li>
                  </ol>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
                  <p className="font-medium">Error</p>
                  <p className="mt-2">{error}</p>
                </div>
              )}
              
              {(formStatus !== 'success' && formStatus !== 'demo') && (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company / Organization
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70"
                    >
                      {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}

              {/* EmailJS setup instructions */}
              {(formStatus !== 'success' && formStatus !== 'demo' && formStatus !== 'sending') && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-500">Developer Note</h4>
                  <p className="mt-2 text-xs text-gray-500">
                    To enable email sending, you need to sign up for an <a href="https://www.emailjs.com/" className="underline" target="_blank" rel="noopener noreferrer">EmailJS</a> account 
                    and update the EmailJS credentials at the top of the Contact.jsx file.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 