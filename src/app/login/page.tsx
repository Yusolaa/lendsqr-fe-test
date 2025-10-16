'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/app/assets/lendsqr.svg';
import LoginImage from '@/app/assets/log-in.svg';
import './login.scss';
import { Loader2 } from 'lucide-react';

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoggingIn) return;
    setIsLoggingIn(true);
    router.push('/dashboard/users');
  };

  const togglePasswordVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className='login-page'>
      {/* Left section */}
      <div className='left-section'>
        <div className='logo'>
          <Image src={Logo} alt='Lendsqr Logo' priority />
        </div>
        <div className='illustration'>
          <Image src={LoginImage} alt='Login Illustration' priority />
        </div>
      </div>

      {/* Right section */}
      <div className='right-section'>
        <div className='form-container'>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <form onSubmit={handleLogin}>
            <div className='form-group'>
              <input type='email' id='email' placeholder='Email' required />
            </div>

            <div className='form-group password-group'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                placeholder='Password'
                required
              />
              <button
                onClick={togglePasswordVisibility}
                className={`show-btn ${showPassword ? 'active' : ''}`}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>

            <a href='#' className='forgot-password'>
              FORGOT PASSWORD?
            </a>

            <button
              type='submit'
              className='login-button'
              disabled={isLoggingIn}
            >
              {isLoggingIn ? <Loader2 className='loader' /> : 'LOG IN'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
