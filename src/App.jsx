import { useState } from 'react'
import MovieCategory from './components/MovieCategory'
import request from './request'
import Hero from './components/Hero'
import NavBar from './components/NavBar'


function App() {

  return (
    <div className='bg-black'>
      <NavBar/>
      <Hero/>
      <MovieCategory title="NETFLIX ORGINALS" Url={request.fetchNetflixOriginals} isLargeCategory={true}/>
      <MovieCategory title="Trending Now" Url={request.fetchTrending}/>
      <MovieCategory title="Top Rated" Url={request.fetchTopRatedMovies}/>
      <MovieCategory title="Action Movies" Url={request.fetchActionMovies}/>
      <MovieCategory title="Comedy Movies" Url={request.fetchComedyMovies}/>
      <MovieCategory title="Horror Movies" Url={request.fetchHorrorMovies}/>
      <MovieCategory title="Romance Movies" Url={request.fetchRomanticMovies}/>
      <MovieCategory title="Adult Movies" Url={request.fetchAdultMovies}/>
    </div>
  )
}

export default App
