import React from 'react'
import AnimeCard from './AnimeCard'


function Maincontent({handleSearch, search, SetSearch, animeList }) {
    return (
        <main>
            <form 
                onSubmit= {handleSearch}>
                <input 
                    type="search" 
                    placeholder="Search anime..." 
                    required
                    value= {search}
                    onChange={e => SetSearch(e.target.value)} />
            </form>
           <div className="anime-lists">
               {animeList.map(anime => (
                    <AnimeCard  
                        anime= {anime}
                        key={anime.mal_id}/>
               ))}
           </div>
        </main>
    )
}

export default Maincontent
