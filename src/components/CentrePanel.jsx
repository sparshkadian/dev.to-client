import { useWidth } from '../hooks/useWidth';

const CentrePanel = () => {
  const { width } = useWidth();

  return (
    <div className={`${width < 1024 ? 'w-full' : ''} w-4/5`}>
      <div className='flex text-lg'>
        <p className='centre-panel-tags font-bold'>Relevant</p>
        <p className='centre-panel-tags'>Latest</p>
        <p className='centre-panel-tags'>Top</p>
      </div>
    </div>
  );
};

export default CentrePanel;
