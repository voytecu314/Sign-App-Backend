import './App.css';
import Signup from './components/Signup';
import Upload from './components/Upload';

function App() {

const fetchVideos = () => {
  fetch('http://localhost:5000/get-videos')
  .then(res=>res.json())
  .then(console.log)
  .catch(console.log);
}

  return (
    <div className="App">
      
      <Signup />
      <Upload />
        


    <button onClick={fetchVideos}>FetchALL</button>

    <form action="http://localhost:5000/get-video" method="post">
      <input type="text" name="fileName" /> <input type="submit" value="fetchOne"/>
    </form>
    

    </div>
    
  );
}

export default App;
