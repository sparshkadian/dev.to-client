import { Link } from 'react-router-dom';
import { OAuth } from '../placeholderText';

const SignUp = () => {
  return (
    <div className='bg-white w-screen h-screen'>
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
