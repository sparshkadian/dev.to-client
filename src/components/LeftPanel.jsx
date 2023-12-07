import { useWidth } from '../hooks/useWidth';

const LeftPanel = () => {
  const { width } = useWidth();

  return (
    <div
      className={`${
        width < 730 ? 'hidden' : 'block'
      } border-2 sm:w-2/5 lg:w-1/4`}
    >
      LeftPanel
    </div>
  );
};

export default LeftPanel;
