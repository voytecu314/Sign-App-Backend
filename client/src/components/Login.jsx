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
    <div>
      <h2>Login</h2>
      
        <input id="middle" type="email" placeholder="Email"/>
        <br />
        <input id="middle" type="password" placeholder="Password"/>
        <br />
        <br />
        <button onClick={login}>CLICK</button>
    </div>
  )
}

export default Login;