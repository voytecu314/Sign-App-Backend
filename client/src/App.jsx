import './App.css';
import axios from 'axios';
import FileBase64 from 'react-file-base64'
import {useState} from 'react'

function App() {
  const [video, setVideo] = useState("");
console.log(video);

const fetchVideos = () => {
  fetch('http://localhost:5000/get-videos')
  .then(res=>res.json())
  .then(console.log)
  .catch(console.log);
}

  const uploadVid = (e) => {

    const data = {
      fileName: e.target.previousSibling.value,
      data: video
    };

    console.log(data);

    axios.post('http://localhost:5000/upload-file', data)
    .then(console.log)
    .catch(err=>console.log('E!',err));
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
        <h3>Please insert an video</h3>
      <FileBase64 
         multiple={false}
         onDone={({ base64 }) => {
           setVideo(base64);
         }}
      />
    <input type="text" name="fileName" />
    <button onClick={uploadVid}>Upload to DB</button>

    <video width="400" controls>
      <source type="video/mp4" src={video}></source>
      Your browser does not support HTML video.
    </video>

    <button onClick={fetchVideos}>FetchALL</button>

    <form action="http://localhost:5000/get-video" method="post">
      <input type="text" name="fileName" /> <input type="submit" value="fetchOne"/>
    </form>
    

    </div>
    
  );
}

export default App;
