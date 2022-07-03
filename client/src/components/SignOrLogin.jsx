import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

const SignOrLogin = () => {

    const [login, setLogin] = useState(null);

    const toggleLogin = (e) => {
        setLogin(e.target.innerText);
    }

  return (<>
    <button onClick={toggleLogin}>Login</button> OR <button onClick={toggleLogin}>Signup</button>
    {login ? login==='Login'?<Login />:<Signup /> : null}
    <br /><br /><br />
    <Link to='/about'><h2>About us</h2></Link>
    <br /><br /><br />
    <Link to='/videos'><h2>Go to videos</h2></Link>
  </>)
}

export default SignOrLogin;