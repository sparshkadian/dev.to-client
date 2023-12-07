import { useWidth } from '../hooks/useWidth';

const CentrePanel = () => {
  const { width } = useWidth();

  return (
    <div className={`${width < 1024 ? 'w-full' : ''} border-2 w-4/5`}>
      CentrePanel
    </div>
  );
};

export default CentrePanel;
