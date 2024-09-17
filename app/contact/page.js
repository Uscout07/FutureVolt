'use client';
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Integrate email.js or backend logic here
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-16">
      <main className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800 dark:text-white" data-aos="fade-down">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-12 md:space-y-0">
          {/* Contact Information */}
          <div className="md:w-1/2 px-8" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Have any questions or need a quote? Reach out to us and we’ll respond as soon as possible.
            </p>
            <div className="space-y-4">
              <p className="text-lg text-gray-800 dark:text-gray-300">
                <span className="font-semibold">Phone:</span> +123 456 7890
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-300">
                <span className="font-semibold">Email:</span> contact@futurevolt.com
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-300">
                <span className="font-semibold">Address:</span> 123 FutureVolt St, City, Country
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-gray-800 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-md text-gray-800 dark:text-white bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-gray-800 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-md text-gray-800 dark:text-white bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium text-gray-800 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-md text-gray-800 dark:text-white bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-orange-500"
                  rows="6"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full p-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
