'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react'; // cross icon

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Save to localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.find((user: any) => user.email === email);

    if (userExists) {
      setError('Email is already registered.');
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    setError('');
    alert('Registration successful! Redirecting to Sign In.');
    router.push('/signin');
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 relative'>
      <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-md relative'>
        {/* Cross (Close) Button */}
        <button
          onClick={() => router.push('/')}
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
        >
          <X size={24} />
        </button>

        <h2 className='text-2xl font-semibold text-center text-gray-800 mb-6'>
          Sign Up
        </h2>
        {error && <p className='text-purple-500 text-center'>{error}</p>}
        <form
          onSubmit={handleSubmit}
          className='space-y-4'
        >
          <div>
            <label
              htmlFor='name'
              className='block text-gray-700'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              required
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              required
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600'
          >
            Sign Up
          </button>
        </form>

        <p className='mt-4 text-center text-gray-700'>
          Already have an account?{' '}
          <a
            href='/signin'
            className='text-purple-500 hover:text-purple-600'
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
