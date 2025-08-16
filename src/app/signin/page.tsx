'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (user: any) => user.email === email && user.password === password
    );

    if (!user) {
      setError('Invalid email or password.');
      return;
    }

    localStorage.setItem('authUser', JSON.stringify(user));
    setError('');
    alert('Login successful!');
    router.push('/'); // Redirect to homepage
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 relative'>
      <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-md relative'>
        {/* Cross (Close) Button - No external library */}
        <button
          onClick={() => router.push('/')}
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold'
          aria-label='Close'
        >
          ×
        </button>

        <h2 className='text-2xl font-semibold text-center text-gray-800 mb-6'>
          Sign In
        </h2>

        {error && <p className='text-purple-500 text-center'>{error}</p>}

        <form
          onSubmit={handleSubmit}
          className='space-y-4'
        >
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
            Sign In
          </button>
        </form>

        <p className='mt-4 text-center text-gray-700'>
          Don&apos;t have an account?{' '}
          <a
            href='/signup'
            className='text-purple-500 hover:text-purple-600'
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
