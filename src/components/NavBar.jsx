import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SideBar from './SideBar';

const NavBar = () => {
  const divRef = useRef(null);
  const [text, setText] = useState('');
  const [width, setWidth] = useState(window.innerWidth);
  const [sideBarOpacity, setSideBarOpacity] = useState(0);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });

  const handleMenuClick = () => {
    divRef.current.style.opacity = 0.8;
    divRef.current.style.backgroundColor = '#666';
    divRef.current.style.zIndex = 3;
    setSideBarOpacity(1);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className='bg-white relative border-b-2'>
      <SideBar
        opacity={sideBarOpacity}
        setOpacity={(value) => {
          setSideBarOpacity(value);
        }}
        divRef={divRef}
      />

      <div
        ref={divRef}
        className='absolute z-[-2] w-screen h-screen bg-reg-500'
      ></div>

      <nav className='flex justify-between p-3 md:px-3 xl:px-20'>
        <div className='flex gap-3 items-center'>
          {width < 780 && (
            <FontAwesomeIcon
              icon={faBars}
              className='text-[20px] p-2 cursor-pointer hover:bg-blue-100 hover:text-blue-700 rounded-md'
              onClick={handleMenuClick}
            />
          )}
          <Link to='/'>
            <img src='../site-logo.png' width={50} alt='site-logo' />
          </Link>
          {width > 780 && (
            <form onSubmit={handleSubmit}>
              <div className='h-[40px] cursor-text border border-[#ccc] pl-2 rounded-md w-[400px] flex items-center justify-between overflow-hidden'>
                <input
                  onChange={handleInputChange}
                  value={text}
                  type='text'
                  placeholder='Search...'
                  className='w-[400px] focus:outline-none placeholder:text-[#777]'
                />
                <div className='cursor-pointer h-[50px] w-[40px] flex items-center justify-center hover:bg-blue-100 hover:text-blue-600'>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className='text-[20px] cursor-pointer'
                  />
                </div>
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
          {width > 780 && <p className='log-in-btn px-4 py-2'>Log in</p>}
          <button className='create-account-btn px-4 py-[7px]'>
            Create account
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
