import { useState } from 'react';
import { Link } from 'react-router-dom';
import { OAuth } from '../placeholderText';

const Login = () => {
  return (
    <div className='bg-white w-screen pb-5'>
      <div className='pt-10 max-w-3xl m-auto flex flex-col items-center gap-4'>
        <Link to='/'>
          <img src='../site-logo.png' width={60} alt='site-logo' />
        </Link>
        <h3 className='font-bold text-3xl'>Join the DEV Community</h3>
        <p>DEV Community is a community of 1,208,564 amazing developers</p>

        {/* OAuth */}
        <div className='w-11/12 sm:w-[70%] flex flex-col gap-5'>
          {OAuth.map((OAuth, i) => (
            <div key={i} className='Oauth-btn'>
              <img src={OAuth.logo} width={25} alt={OAuth.alt} />
              <p>{OAuth.text}</p>
              <p></p>
            </div>
          ))}
        </div>

        <div className='auth-form-divider mt-5 border w-11/12 sm:w-[70%]'></div>

        <form className='flex flex-col gap-3 mt-4 w-11/12 sm:w-[70%]'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='font-semibold'>
              Email
            </label>
            <input
              type='text'
              name='email'
              id='email'
              className='border p-2 rounded-md'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='password' className='font-semibold'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='border p-2 rounded-md'
            />
          </div>

          <div className='flex justify-between'>
            <div className='flex item-center gap-2'>
              <input
                type='checkbox'
                name='checkbox'
                id='checkbox'
                className='w-[15px] h-[25px]'
              />
              <label htmlFor='checkbox'>Remember me</label>
            </div>
            <p className='text-blue-600'>Forgot Password?</p>
          </div>
          <button className='mt-4 text-white bg-blue-700 w-full p-3 rounded-md hover:bg-blue-800'>
            Log in
          </button>
        </form>

        <p className='mt-5 italic text-sm text-center text-[#777]'>
          By signing up, you are agreeing to our{' '}
          <span className='text-blue-600'>privacy policy, terms of use </span>
          <br /> and <span className='text-blue-600'>code of conduct</span>.
        </p>

        <div className='mt-2 border w-11/12 sm:w-[70%]'></div>

        <p className='mt-2'>
          New to DEV Community?{' '}
          <Link to='/signup'>
            <span className='text-blue-600'>Create Account</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
