import React from 'react'
import { useEffect, useState } from 'react'
import { fetchSearchGifs } from '../helpers/fetchGifs'
export const GifsNotFound = ({category, show}) => {
    const [gifsNotFound, setGifsNotFound] = useState({
        id: "",
        url: "",
        title: ""
    })
    const NOT_FOUND_SEARCH = "not found"
    useEffect(()=>{
        fetchSearchGifs(NOT_FOUND_SEARCH).then(gifs => setGifsNotFound(gifs[0]))
    },[])
    
  return (
    <div className="not-found" style={{display: show ? 'flex' : 'none'}}>
        <p style={{color: "white"}}>
          We couldn't found a GIF for <span>{category}</span>
        </p>
        <img key={gifsNotFound.id} src={gifsNotFound.url} alt={gifsNotFound.title}></img>
    </div>
  )
}
