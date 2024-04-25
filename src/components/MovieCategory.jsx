import React, { useEffect, useState } from 'react'
import axios from '../axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = 'https://image.tmdb.org/t/p/original/'

function MovieCategory({title,Url,isLargeCategory}) {

const [movies,setmovies] = useState([])
const [trailerUrl,setTrailerUrl] = useState('')

const fetchMovies = async()=>{
    const { data } = await axios.get(Url)
    setmovies(data.results)

}
const handleMovieClick = async (movie)=>{
  if(trailerUrl){
    setTrailerUrl('')
  }else{
    try{
      let url =  await movieTrailer(movie?.title || movie?.name || movie?.original_name)
      const urlParams= new URLSearchParams(new URL(url).search)
      setTrailerUrl(urlParams.get('v'))
    }catch{
    }
  }
}
let opts = {
  height: '390',
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
}
useEffect(()=>{
    fetchMovies()
},[Url])

  return (
    <div className="ml-[20px] text-white">
       <h1 className='font-bold text-lg'>{title}</h1>
       <div className='flex overflow-y-hidden overflow-x-scroll p-5'>
        {movies.map(movie=>(
            <img onClick={()=>handleMovieClick(movie)} key={movie.id} src={`${base_url}${ isLargeCategory ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`${isLargeCategory ? 'max-h-[15.6rem] hover:scale-110': ' max-h-[6.25rem] hover:scale-[1.08]'} w-full object-contain mr-3 transition-transform duration-[450ms]`} />
        ))}
       </div>
       <div className='p-10'>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
       </div>
    </div>
  )
}

export default MovieCategory