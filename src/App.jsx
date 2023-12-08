import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const App = () => {
  const location = useLocation();
  const navBarNotAllowed = ['signup', 'login'];

  const checkLocation = () => {
    if (navBarNotAllowed.includes(location.pathname)) {
      return false;
    } else return true;
  };

  return (
    <>
      {checkLocation() && <NavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
