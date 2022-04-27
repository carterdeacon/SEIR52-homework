import {useEffect, useState} from "react";
import './App.css'
import SearchIcon from'./search.svg'
import MovieCard from './MovieCard'

const API_URL = "http://www.omdbapi.com?apikey=571fb835"

const movie1={
  Title: 'Spiderman in Cannes',
  Year: '2016', 
  imdbID: 'tt5978586', 
  Type: 'movie', 
  Poster: 'https://m.media-amazon.com/images/M/MV5BZDlmMGQwYm…WUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg'
}

function App() {
  //default state of our movies is an empty array
  const[movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm]=useState('')

  const searchMovies = async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    //Search is a key in data
    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('Spiderman')
  },[])

  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movies" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
        <img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)}/>
      </div>
      {movies?.length>0 ?(
          <div className="container">
          {movies.map((movie)=>(
          <MovieCard movie={movie}/>
          ))}
        </div>
        ): (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
