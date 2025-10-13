'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/app/assets/lendsqr.svg';
import LoginImage from '@/app/assets/log-in.svg';
import './login.scss';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='login-page'>
      {/* Left side - illustration */}
      <div className='left-section'>
        <div className='logo'>
          <Image src={Logo} alt='Lendsqr Logo' priority />
        </div>
        <div className='illustration'>
          <Image src={LoginImage} alt='Login Illustration' priority />
        </div>
      </div>

      {/* Right side - form */}
      <div className='right-section'>
        <div className='form-container'>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <form>
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

            <button type='submit' className='login-button'>
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
