import { Outlet } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import MyContext from '../context/MyContext';
import NotAuthorized from './NotAuthorized';


const Auth = () => {

const {auth, setAuth} = useContext(MyContext);
console.log('Auth:',auth);
useEffect(()=>{
    
    if(localStorage.getItem('SignAppToken')) {

        

        const fetchOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json', token: localStorage.getItem('SignAppToken')},
            body: JSON.stringify({msg: 'Authentication in progress, checking JWT token...'})
        }

        fetch('http://localhost:5000/auth', fetchOptions)
        .then(res=>res.json())
        .then(payload=>{console.log(payload);setAuth(payload.auth)})
        .catch(console.log);
      } 
      else {console.log('No token in local storage'); setAuth(false)}
});

  return auth ? <Outlet /> : <NotAuthorized />;
};

export default Auth;