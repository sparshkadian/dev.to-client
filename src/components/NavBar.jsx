import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  return (
    <div className='border-b-2'>
      <nav className='p-2 flex justify-between lg:ml-[120px] lg:mr-[150px]'>
        <div className='flex gap-3 items-center'>
          {width < 780 && (
            <FontAwesomeIcon
              icon={faBars}
              className='text-[20px] p-2 cursor-pointer hover:bg-blue-100 hover:text-blue-700 rounded-md'
            />
          )}
          <Link to='/'>
            <img src='../site-logo.png' width={50} alt='site-logo' />
          </Link>
          {width > 780 && (
            <form>
              <div className='border border-[#ccc] p-2 rounded-md w-[400px] flex items-center justify-between hover:border-blue-600'>
                <input
                  type='text'
                  placeholder='Search...'
                  className='focus:outline-none placeholder:text-[#777]'
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className='text-[20px] '
                />
              </div>
            </form>
          )}
        </div>

        <div className='flex items-center gap-5'>
          {width < 780 && (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className='text-[20px] cursor-pointer'
            />
          )}
          {width > 780 && <p className='text-[#777]'>Log in</p>}
          <button className='px-4 py-[7px] font-semibold rounded-md border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600'>
            Create account
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
