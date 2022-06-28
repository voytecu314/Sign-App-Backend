
import './App.css';
import FileBase64 from 'react-file-base64'
import {useState} from 'react'

function App() {
  const [image, setImage] = useState("");


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
      <form action="http://localhost:5000/upload-file" method="post">
        <h3>Please insert an image</h3>
        <input type="text" name='fileName' />
      <FileBase64 
         multiple={false}
         onDone={({ base64 }) => {
           setImage(base64);
         }}
      />
      <input type="submit" value="upload" />
      </form>

    </div>
  );
}

export default App;
