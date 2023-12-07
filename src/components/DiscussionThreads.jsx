import { useEffect } from 'react';
import { useWidth } from '../hooks/useWidth';

const DiscussionThreads = () => {
  const { width } = useWidth();

  useEffect(() => {
    document
      .querySelector('.discussion-box')
      .addEventListener('mouseenter', () => {
        document.querySelector('.discussion-heading').style.color =
          'rgb(37 99 235)';
      });

    return () => {
      document
        .querySelector('.discussion-box')
        .addEventListener('mouseleave', () => {
          document.querySelector('.discussion-heading').style.color = '#000';
        });
    };
  }, []);

  return (
    <div
      className={`${
        width < 1024 ? 'hidden' : 'block'
      } bg-white border rounded-md flex flex-col gap-2 sm:w-0 md:w-1/4 lg:w-2/5`}
    >
      <div className='border-b p-3'>
        <h2 className='font-semibold'>#discuss</h2>
        <p className='text-sm text-[#777]'>
          Discussion threads targeting the whole community
        </p>
      </div>

      {/* Content Box */}
      <div className='discussion-box p-3 cursor-pointer'>
        <h3 className='discussion-heading'>Meme Monday</h3>
        <p className='text-sm text-[#777]'>39 Comments</p>
      </div>
    </div>
  );
};

export default DiscussionThreads;
