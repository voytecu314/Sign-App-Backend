import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetVids = () => {

    const [data, setData] = useState();

    const navigate = useNavigate();

    const fetchVideos = () => {
        fetch('http://localhost:5000/get-videos')
        .then(res=>res.json())
        .then(({vid})=>setData(vid))
        .catch(console.log);
      }

      console.log(data);

  return (<>
    <button onClick={fetchVideos}>FetchALL</button>

    <form action="http://localhost:5000/get-video" method="post">
      <input type="text" name="fileName" /> <input type="submit" value="fetchOne"/>
    </form>

    <button onClick={()=>navigate('upload')}>Upload videos to Database</button>

    {data && data.map((video,i)=><div key={i}>
                                    <p>{video.fileName}</p>
                                    <video width="400" controls>
                                      <source type="video/mp4" src={video.data}></source>
                                      Your browser does not support HTML video.
                                    </video>
                                  </div>)}

  </>)
}

export default GetVids;