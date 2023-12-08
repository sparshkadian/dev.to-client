import { useWidth } from '../hooks/useWidth';

const DiscussionThreads = () => {
  const { width } = useWidth();

  const threads = [
    {
      heading: 'Meme Monday',
      comments: 39,
    },
    {
      heading: 'How Do You Organize Your Digital World',
      comments: 5,
    },
    {
      heading: 'How to fall in love with coding',
      comments: 22,
    },
    {
      heading: 'is PHP still a viable choice in 2023',
      comments: 1,
    },
    {
      heading: "Sloan's inbox: How did open source come to be?",
      comments: 7,
    },
  ];

  return (
    <div
      className={`${
        width < 1024 ? 'hidden' : 'block'
      } bg-white border rounded-md flex flex-col gap-2 sm:w-0 md:w-1/4 lg:w-2/5`}
    >
      <div className='border-b p-3'>
        <h2 className='font-bold text-xl'>#discuss</h2>
        <p className='text-xs text-[#777]'>
          Discussion threads targeting the whole community
        </p>
      </div>

      {/* Content Box */}
      {threads.map((thread, i) => (
        <div
          key={i}
          className='discussion-box cursor-pointer flex flex-col border-b'
        >
          <div className='px-3 flex flex-col gap-3 mb-5'>
            <h3 className='discussion-heading'>{thread.heading}</h3>
            <p className='text-sm text-[#777]'>{`${thread.comments} comments`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscussionThreads;
