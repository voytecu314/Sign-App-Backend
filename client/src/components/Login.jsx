import { useNavigate } from "react-router-dom";

const Login = () => {

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
        .then(json=>{console.log(json);  
                    localStorage.setItem("SignAppToken",json.token);
                    navigate('/videos');})
        .catch(console.log);
    }

  return (
    <div>Login
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button onClick={login}>CLICK</button>
    </div>
  )
}

export default Login;