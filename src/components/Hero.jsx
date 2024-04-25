import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../request'
function Hero() {
    const [movie,setMovie] = useState([])
    const fetchMovie = async()=>{
       const {data} = await axios.get(requests.fetchNetflixOriginals)
       setMovie(data.results[
        Math.floor( Math.random()* data.results.length )
       ])
    }
    useEffect(()=>{
        fetchMovie()
    },[])
function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str
}
  return (
    <div
    className='h-[448px] object-contain text-white' 
    style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition:"center"
    }}>
        <div className='flex flex-col justify-center h-full mx-12 w-full'>
            <h1 className='font-extrabold text-2xl'>{movie?.title || movie?.name ||movie?.original_name}</h1>
            <div className='my-3'>
                <button className='cursor-pointer text-white outline-0 font-[700] rounded px-8 mr-4 py-2 bg-[rgba(51,51,51,0.5)] hover:text-black hover:bg-[#e6e6e6] transition'>Play</button>
                <button className='cursor-pointer text-white outline-0 font-[700] rounded px-8 mr-4 py-2 bg-[rgba(51,51,51,0.5)] hover:text-black hover:bg-[#e6e6e6] transition'>My List</button>
            </div>
            <div className='w-1/3 my-2'>
                {truncate(movie?.overview,150)}
            </div>
        </div>
        <div className='h-32 w-full bg-gradient-to-t from-[rgba(37,37,37,0.6)] to-[#111]'/>

    </div> 
  )
}

export default Hero