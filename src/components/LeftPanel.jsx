import { useWidth } from '../hooks/useWidth';
import house from '../assets/imgs/house.png';
import podcast from '../assets/imgs/microphone.png';
import video from '../assets/imgs/video-camera.png';
import tag from '../assets/imgs/tags.png';
import faq from '../assets/imgs/light-bulb.png';
import forem from '../assets/imgs/bags.png';
import advertise from '../assets/imgs/heart.png';
import horn from '../assets/imgs/horn.png';
import guide from '../assets/imgs/guide.png';
import thinking from '../assets/imgs/thinking.png';

const LeftPanel = () => {
  const { width } = useWidth();

  const links = [
    {
      icon: house,
      text: 'Home',
      alt: 'back-home',
    },
    {
      icon: podcast,
      text: 'Podcast',
      alt: 'podcast',
    },
    {
      icon: video,
      text: 'Videos',
      alt: 'video',
    },
    {
      icon: tag,
      text: 'Tags',
      alt: 'Tags',
    },
    {
      icon: faq,
      text: 'FAQ',
      alt: 'faq',
    },
    {
      icon: forem,
      text: 'Forem Shop',
      alt: 'forem-shop',
    },
    {
      icon: advertise,
      text: 'Advertise on DEV',
      alt: 'advertise',
    },
    {
      icon: '../site-logo.png',
      text: 'About',
      alt: 'about',
    },
    {
      icon: horn,
      text: 'Contact',
      alt: 'contact',
    },
    {
      icon: guide,
      text: 'Guides',
      alt: 'guides',
    },
    {
      icon: thinking,
      text: 'Software comparisons',
      alt: 'software-companion',
    },
  ];

  return (
    <div className={`${width < 770 ? 'hidden' : 'block'} sm:w-2/5 lg:w-1/4`}>
      <div className='flex flex-col gap-3 bg-white rounded-md p-3 border'>
        <p className='text-xl font-bold'>
          DEV Community is a community of 1,206,163 amazing developers
        </p>
        <p className='text-[#777]'>
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <button className='create-account-btn py-[7px]'>Create Account</button>
        <p className='log-in-btn text-center py-[7px]'>Log in</p>
      </div>

      <div>
        {links.map((link) => (
          <div className='ml-2 mt-5 flex gap-4 items-center'>
            <img src={link.icon} width={20} alt={link.alt} />
            <p>{link.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
