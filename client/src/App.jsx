import './App.css';
import FileBase64 from 'react-file-base64'
import {useState} from 'react'

function App() {
  const [image, setImage] = useState("");
console.log(image);
  const uploadVid = (e) => {
    fetch('http://localhost:5000/upload-file', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        fileName: e.target.previousSibling.value,
        data: image
      })
    })
    .then(res=>res.json())
    .then(console.log)
    .catch(console.log);
  }

  return (
    <div className="App">
      <form action="http://localhost:5000/signup" method="post">
        <h3>First Name</h3>
          <input type="text" name="firstName" />
        <h3>Email</h3>
          <input type="email" name='email' />
        <h3>Password</h3>
          <input type="password" name='password' />
          <br></br>
          <br></br>
          <input type="submit" value="Login" />
      </form>
        <h3>Please insert an image</h3>
      <FileBase64 
         multiple={false}
         onDone={({ base64 }) => {
           setImage(base64);
         }}
      />
    <input type="text" name="fileName" />
    <button onClick={uploadVid}>Upload to DB</button>
    <img src={image} alt="egtr" />
    </div>
    
  );
}

export default App;
