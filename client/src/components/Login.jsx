import { useContext } from "react";
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const {setAuth} = useContext(MyContext);

    const navigate = useNavigate();


    const login = (e) => {

        const email = e.target.previousSibling.previousSibling.value;
        const password = e.target.previousSibling.value;

        const options = {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({email, password})
        }

        fetch('http://localhost:5000/login',options)
        .then(res=>res.json())
        .then(json=>{console.log(json); setAuth(json.auth); navigate('/videos')})
        .catch(console.log);
    }

  return (
    <div>Login
        <input type="email" />
        <input type="password" />
        <button onClick={login}>LOGIN</button>
    </div>
  )
}

export default Login;