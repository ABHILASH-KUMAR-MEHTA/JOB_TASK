'use client';

import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        // ⬇️ Replace this with the API endpoint from the Postman collection
        'https://postman-echo.com/post',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error('Failed to submit');

      setStatus('success');
      setFormData({ email: '', name: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className='relative w-full'
      style={{
        background:
          'linear-gradient(to right, #ff9966, #ff5e62, #6a11cb, #2575fc)',
      }}
    >
      <div className='relative container mx-auto px-4 lg:px-8 flex justify-center py-20'>
        <div className='w-full max-w-lg bg-white rounded-xl p-8 shadow-lg relative z-10'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-8 text-black'>
            Let’s Get in Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            className='space-y-6'
          >
            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='block text-gray-700 font-medium mb-1'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='example@email.com'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor='name'
                className='block text-gray-700 font-medium mb-1'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Full Name'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor='phone'
                className='block text-gray-700 font-medium mb-1'
              >
                Phone
              </label>
              <input
                type='tel'
                id='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder='+1 234 567 890'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor='message'
                className='block text-gray-700 font-medium mb-1'
              >
                Message
              </label>
              <textarea
                id='message'
                value={formData.message}
                onChange={handleChange}
                required
                placeholder='Write your message...'
                rows={5}
                className='w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/* Submit */}
            <button
              type='submit'
              disabled={loading}
              className='w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50'
            >
              {loading ? 'Sending...' : 'Get in Touch'}
            </button>
          </form>

          {/* Status Messages */}
          {status === 'success' && (
            <p className='mt-4 text-green-600 text-center'>
              ✅ Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className='mt-4 text-red-600 text-center'>
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
