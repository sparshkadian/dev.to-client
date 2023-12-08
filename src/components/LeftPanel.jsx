import { useWidth } from '../hooks/useWidth';
import { navLinks } from '../placeholderText';
import { otherLinks } from '../placeholderText';
import { tags } from '../placeholderText';
import { Link } from 'react-router-dom';

const LeftPanel = () => {
  const { width } = useWidth();

  return (
    <div className={`${width < 770 ? 'hidden' : 'block'} sm:w-2/5 lg:w-[27%]`}>
      <div className='flex flex-col gap-3 bg-white rounded-md p-3 border'>
        <p className='text-xl font-bold'>
          DEV Community is a community of 1,206,163 amazing developers
        </p>
        <p className='text-[#777]'>
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <Link to='/signup' className='create-account-btn py-[7px] text-center'>
          Create Account
        </Link>

        <Link to='/login' className='log-in-btn text-center py-[7px]'>
          Log in
        </Link>
      </div>

      <div className='mt-5'>
        {navLinks.map((link, i) => (
          <div
            key={i}
            className='flex gap-4 items-center p-2 cursor-pointer hover:bg-blue-100 rounded-md hover:text-blue-600'
          >
            <img src={link.icon} width={20} alt={link.alt} />
            <p>{link.text}</p>
          </div>
        ))}
      </div>

      <p className='mt-10 font-bold'>Other</p>
      <div className='mt-2'>
        {otherLinks.map((link, i) => (
          <div
            key={i}
            className='flex gap-4 items-center p-2 cursor-pointer hover:bg-blue-100 rounded-md hover:text-blue-600'
          >
            <img src={link.icon} width={20} alt={link.alt} />
            <p>{link.text}</p>
          </div>
        ))}
      </div>

      <div className=''></div>

      <p className='mt-10 font-bold'>Popular Tags</p>
      <div className='h-[350px] overflow-y-scroll mt-4 ml-3 flex flex-col'>
        {tags.map((tag, i) => (
          <p
            key={i}
            className='p-2 cursor-pointer hover:bg-blue-100 rounded-md hover:text-blue-600'
          >{`#${tag}`}</p>
        ))}
      </div>

      <div className='mt-10 flex flex-col gap-3 text-sm text-[#777]'>
        <p>
          <span className='text-blue-700 font-bold'>DEV Community</span> A
          constructive and inclusive social network for software developers.
          With you every step of your journey.
        </p>
        <p>
          Built on <span className='text-blue-700 font-bold'>Forem</span> — the{' '}
          <span className='text-blue-700 font-bold'>open source</span> software
          that powers <span className='text-blue-700 font-bold'>DEV</span> and
          other inclusive communities.
        </p>
        <p>
          Made with love and{' '}
          <span className='text-blue-600 font-bold'>React</span>. DEV Community
          © 2016 - 2023.
        </p>
      </div>
    </div>
  );
};

export default LeftPanel;
