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
import thumb from '../assets/imgs/thumb.png';
import emote from '../assets/imgs/emote.png';
import eyes from '../assets/imgs/eyes.png';

const LeftPanel = () => {
  const { width } = useWidth();

  const navLinks = [
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

  const otherLinks = [
    {
      icon: thumb,
      text: 'Code of Conduct',
      alt: 'code-of-conduct',
    },
    {
      icon: emote,
      text: 'Privacy Policy',
      alt: 'privacy-policy',
    },
    {
      icon: eyes,
      text: 'Terms of use',
      alt: 'terms-of-use',
    },
  ];

  const tags = [
    'webdev',
    'javascript',
    'programming',
    'beginners',
    'tutorial',
    'react',
    'python',
    'devops',
    'opensource',
    'aws',
    'discuss',
    'productivity',
    'ai',
    'node',
    'codenewbie',
    'typescripts',
    'career',
    'css',
    'news',
    'html',
    'cloud',
    'learning',
    'security',
    'database',
    'api',
    'github',
    'java',
    'testing',
    'machinelearning',
    'go',
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

      <div className='mt-5'>
        {navLinks.map((link) => (
          <div className='flex gap-4 items-center p-2 cursor-pointer hover:bg-blue-100 rounded-md hover:text-blue-600'>
            <img src={link.icon} width={20} alt={link.alt} />
            <p>{link.text}</p>
          </div>
        ))}
      </div>

      <p className='mt-10 font-bold'>Other</p>
      <div className='mt-2'>
        {otherLinks.map((link) => (
          <div className='flex gap-4 items-center p-2 cursor-pointer hover:bg-blue-100 rounded-md hover:text-blue-600'>
            <img src={link.icon} width={20} alt={link.alt} />
            <p>{link.text}</p>
          </div>
        ))}
      </div>

      <div className=''></div>

      <p className='mt-10 font-bold'>Popular Tags</p>
      <div className='h-[350px] overflow-y-scroll mt-4 ml-3 flex flex-col'>
        {tags.map((tag) => (
          <p className='p-2 cursor-pointer hover:bg-blue-100 rounded-md hover:text-blue-600'>{`#${tag}`}</p>
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
