import { useEffect } from 'react';
import React from 'react'

function Upcoming({ UpcomingAnime, SetUpcomingAnime }) {
    const GetUpcomingAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
            .then(res => res.json());
        SetUpcomingAnime(temp.top.slice(0, 12));
    }
    useEffect(() => {
        GetUpcomingAnime();
    }, []);
    return (
        <div className="upcoming">
            <h1 className="upcoming-title">Upcoming Anime</h1>
            <div className="list animeCard">
                {UpcomingAnime.map(anime => (
                    <a
                        href={anime.url}
                        className="title"
                        target="_blank"
                        key={anime.mal_id}
                        rel="noopener noreferrer">
                        <figure>
                            <img src={anime.image_url} className="anime" alt="Anime thumbnail" />
                        </figure>
                        <h3> {anime.title} </h3>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Upcoming;