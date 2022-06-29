import { useState } from "react";
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
  </>)
}

export default SignOrLogin;