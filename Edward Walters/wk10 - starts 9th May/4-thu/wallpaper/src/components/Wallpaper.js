import React, { useEffect, useState } from 'react'

function Wallpaper() {

    const [state, setState] = useState({});

    const fetchImages = () => {
        fetch('https://api.reddit.com/r/awww.json?limit=75')
        .then(response => response.json())
        .then(data => setState({data: data}));
    }
    
    useEffect(() => {
       fetchImages();
    },[])


  return (

    <div>
     {state.data.children.map((child) => {
         return <p>{child.data.url}</p>
     }) }

    </div>
  )
}

export default Wallpaper

