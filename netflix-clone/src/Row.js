import React, { useEffect, useState } from 'react';
import axios from './axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Row.css';
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchURL,isLargeRow}) {
   
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

     useEffect(()=>{
         async function fetchData(){
             const request = await axios.get(fetchURL);
             console.log(request.data.results);
             setMovies(request.data.results);
             return request;
         }
         fetchData();
     },[fetchURL]);

     const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

     const handleClick = (movie)=>{
         console.log("clicked in movie");
         console.log(movie.name);
         if(trailerUrl){
             setTrailerUrl("");
         }
         else{
             movieTrailer(movie.name ).then(url=>{  
              const urlParams = new URLSearchParams(new URL(url).search());
              setTrailerUrl(urlParams.get('v'));
             }).catch(error => console.log(error))
         }
     }

     console.table(movies);

    return (
        <div className="row">
            <h2 className="title">{title}</h2>
            <div className="row_posters">
              {/* Several row posters */}  
              {movies.map(movie=>(
                 <img onClick={()=>handleClick(movie)}
                  key = {movie.id} 
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
              ))}
            </div>
            {/*Container --> poster */}

            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
