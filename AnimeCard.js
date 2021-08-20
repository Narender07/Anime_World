import React from 'react'

function AnimeCard({ anime }) {
    return (
        <article className="anime-card">
            <a  href={anime.url} target="_blank">
               <figure>
                   <img 
                    src={anime.image_url} 
                    alt="Anime Image" />
               </figure>
               <p className="synposis"><span>Synposis:</span>{anime.synopsis}</p>
               <span className="rating">{anime.score}</span>
            </a>
            
            <h3>{anime.title}</h3>
           
        </article>
    )
}

export default AnimeCard
