import { Link } from 'react-router-dom';
import apple from '../assets/OAuth/apple-logo.png';
import github from '../assets/OAuth/github.png';
import twitter from '../assets/OAuth/twitter.png';
import mail from '../assets/OAuth/mail.png';

const SignUp = () => {
  return (
    <div className='bg-white w-screen h-screen'>
      <div className='pt-10 max-w-3xl m-auto flex flex-col items-center gap-4'>
        <Link to='/'>
          <img src='../site-logo.png' width={60} alt='site-logo' />
        </Link>
        <h3 className='font-bold text-3xl'>Join the DEV Community</h3>
        <p className='text-[#777]'>
          DEV Community is a community of 1,208,564 amazing developers
        </p>

        {/* OAuth */}
        <div className='w-11/12 sm:w-[70%] flex flex-col gap-5'>
          <div className='Oauth-btn'>
            <img src={apple} width={25} alt='apple-logo' />
            <p>Sign up with Apple</p>
            <p></p>
          </div>

          <div className='Oauth-btn'>
            <img src={github} width={25} alt='apple-logo' />
            <p>Sign up with Github</p>
            <p></p>
          </div>

          <div className='Oauth-btn'>
            <img src={twitter} width={25} alt='apple-logo' />
            <p>Sign up with Twitter</p>
            <p></p>
          </div>

          <div className='Oauth-btn'>
            <img src={mail} width={25} alt='apple-logo' />
            <p>Sign up with Mail</p>
            <p></p>
          </div>
        </div>

        <p className='mt-5 italic text-sm text-center text-[#777]'>
          By signing up, you are agreeing to our{' '}
          <span className='text-blue-600'>privacy policy, terms of use </span>
          <br /> and <span className='text-blue-600'>code of conduct</span>.
        </p>

        <div className='border w-[500px]'></div>

        <p className='mt-5'>
          Already have an account?{' '}
          <Link to='/login'>
            <span className='text-blue-600'>Log in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
