import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import './row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            try {
                // Netflix originals are TV shows, others are mostly movies
                const url = isLargeRow 
                    ? `/tv/${movie.id}/videos?api_key=a9ec5774ed6f9b553a70cb9b413712c2`
                    : `/movie/${movie.id}/videos?api_key=a9ec5774ed6f9b553a70cb9b413712c2`;
                    
                const request = await axios.get(url);
                if (request.data.results && request.data.results.length > 0) {
                    // Try to find a YouTube trailer, otherwise just use the first video
                    const video = request.data.results.find(vid => vid.type === "Trailer" && vid.site === "YouTube") || request.data.results[0];
                    if (video && video.key) {
                        setTrailerUrl(video.key);
                    }
                } else {
                    console.log("No video found for this title on TMDB.");
                }
            } catch (error) {
                console.log("Error fetching TMDB video:", error);
            }
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                        <img 
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name} 
                        />
                    )
                ))}
            </div>
            
            {trailerUrl && (
                <div style={{ padding: "40px", position: "relative" }}>
                    <button 
                        onClick={() => setTrailerUrl("")} 
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "40px",
                            background: "#e50914",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            borderRadius: "4px"
                        }}
                    >
                        X Close
                    </button>
                    <iframe 
                        width="100%" 
                        height="390" 
                        src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1`} 
                        frameBorder="0" 
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title="Movie Video"
                    ></iframe>
                </div>
            )}
        </div>
    );
}

export default Row;
