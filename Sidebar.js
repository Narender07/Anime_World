import React from 'react'

function Sidebar({ topAnime }) {
    return (
        <aside>
            <h3 className="sidebar-title">Top Anime</h3>
            {topAnime.map(anime => (
                <a 
                    className = " sidebar-link"
                    href={anime.url}
                    key={anime.mal_id}
                    target="_blank"
                    rel= "noreferrer">
                    {anime.title}
                </a>
            ))}
        </aside>
    )
}

export default Sidebar
