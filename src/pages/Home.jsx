import DiscussionThread from '../components/DiscussionThreads';
import LeftPanel from '../components/LeftPanel';
import CentrePanel from '../components/CentrePanel';

const Home = () => {
  return (
    <div className='mt-3 mb-5 px-1 md:px-3 xl:px-[120px]'>
      <div className='flex gap-2 justify-between items-start'>
        <LeftPanel />
        <CentrePanel />
        <DiscussionThread />
      </div>
    </div>
  );
};

export default Home;
