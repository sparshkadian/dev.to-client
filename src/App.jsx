import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />} />
      </Routes>
    </>
  );
};

export default App;
