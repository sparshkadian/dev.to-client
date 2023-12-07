import DiscussionThread from '../components/DiscussionThreads';
import LeftPanel from '../components/LeftPanel';
import CentrePanel from '../components/CentrePanel';

const Home = () => {
  return (
    <div className='sm:p-6 md:p-8 lg:p-10'>
      <div className='mt-3 flex gap-5 justify-between'>
        <LeftPanel />
        <CentrePanel />
        <DiscussionThread />
      </div>
    </div>
  );
};

export default Home;
