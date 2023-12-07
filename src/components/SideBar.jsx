import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ opacity, setOpacity, divRef }) => {
  const handleCloseSideBar = () => {
    divRef.current.style.opacity = 1;
    divRef.current.style.backgroundColor = '';
    divRef.current.style.zIndex = -2;
    setOpacity(0);
  };

  return (
    <div
      className={` sideBar opacity-${opacity} absolute ${
        opacity === 1 ? 'z-[10]' : 'z-[-1]'
      } w-[270px] h-screen border-2 p-3 bg-white`}
    >
      <div className='flex justify-between  items-center'>
        <h2 className='text-lg font-bold'>DEV Community</h2>
        <FontAwesomeIcon
          icon={faX}
          onClick={handleCloseSideBar}
          className='cursor-pointer hover:bg-blue-100 hover:text-blue-600 px-3 py-[10px] rounded-md'
        />
      </div>

      <div className='mt-5 border rounded-md p-2 flex flex-col gap-3'>
        <p className='text-lg font-bold'>
          DEV Community is a community of 1,206,163 amazing developers
        </p>
        <p className='text-[#777]'>
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <button className='create-account-btn py-[7px]'>Create Account</button>
        <p className='log-in-btn text-center py-[7px]'>Log in</p>
      </div>
    </div>
  );
};

export default SideBar;
