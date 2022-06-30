import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../context/MyContext';


const Auth = () => {
  const { auth } = useContext(MyContext);

  return auth ? <Outlet /> : <Navigate to='/no-auth' />;
};

export default Auth;