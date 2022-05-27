import { useEffect } from 'react';
import React from 'react'

function Trending({ topAnime, SetTopAnime }) {
    const GetTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
            .then(res => res.json());
        SetTopAnime(temp.top.slice(0, 3));
    }
    useEffect(() => {
        GetTopAnime();
    }, []);
    return (
        <div className="trending">
            <h3>Trending Anime</h3>
            {topAnime.map(anime => (
                <a
                    href={anime.url}
                    target="_blank"
                    key={anime.mal_id}
                    rel="noopener noreferrer">
                    {anime.title}
                </a>
            ))}
        </div>
    )
}

export default Trending;