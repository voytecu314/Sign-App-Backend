import React from 'react'

const GetVids = () => {

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
  </>)
}

export default GetVids;