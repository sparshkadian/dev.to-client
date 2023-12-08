import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MailSignUp from './Auth/MailSignUp';

const App = () => {
  const location = useLocation();
  const navBarAllowed = ['/'];

  const checkLocation = () => {
    if (!navBarAllowed.includes(location.pathname)) {
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
        <Route path='/signup/email' element={<MailSignUp />} />
      </Routes>
    </>
  );
};

export default App;
