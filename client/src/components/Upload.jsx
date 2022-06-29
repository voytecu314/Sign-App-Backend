import FileBase64 from 'react-file-base64';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    
    const [video, setVideo] = useState("");

    const navigate = useNavigate();
    
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

  return (<>
    <h3>Please insert an video</h3>
      <FileBase64 
         multiple={false}
         onDone={({ base64 }) => {
           setVideo(base64);
         }}
      />
    <input type="text" name="fileName" />
    <button onClick={uploadVid}>Upload to DB</button>
    <h5>Problems?</h5>
    <button onClick={()=>navigate('contact')}>Contact us</button>
  </>)
}

export default Upload;