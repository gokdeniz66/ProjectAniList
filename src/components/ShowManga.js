import { useEffect } from 'react';
import React from 'react'

function ShowManga({ Manga, SetManga }) {
    const GetManga = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/manga/1/bypopularity`)
            .then(res => res.json());
        SetManga(temp.top.slice(0, 12));
    }
    useEffect(() => {
        GetManga();
    }, []);
    return (
        <div className="upcoming" id="manga">
            <h1 className="upcoming-title">Top Manga</h1>
            <div className="list animeCard">
                {Manga.map(Manga => (
                    <a
                        href={Manga.url}
                        className="title"
                        target="_blank"
                        key={Manga.mal_id}
                        rel="noopener noreferrer">
                        <figure>
                            <img src={Manga.image_url} className="anime" alt="Anime thumbnail" />
                        </figure>
                        <h3> {Manga.title} </h3>
                        <h4 className="score">Score: {Manga.score} </h4>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ShowManga;