import { useNavigate } from "react-router-dom";

const GetVids = () => {

    const navigate = useNavigate();

    const fetchVideos = () => {
        fetch('http://localhost:5000/get-videos')
        .then(res=>res.json())
        .then(console.log)
        .catch(console.log);
      }

  return (<>
    <button onClick={fetchVideos}>FetchALL</button>

    <form action="http://localhost:5000/get-video" method="post">
      <input type="text" name="fileName" /> <input type="submit" value="fetchOne"/>
    </form>

    <button onClick={()=>navigate('upload')}>Upload videos to Database</button>

  </>)
}

export default GetVids;