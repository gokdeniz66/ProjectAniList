import { useEffect } from 'react';
import React from 'react'

function AnimeNews({ News, SetNews }) {
    const GetNews = async () => {
        const temp = await fetch(`https://api.jikan.moe/v4/anime/1/news`)
            .then(res => res.json());
        SetNews(temp.data.slice(0, 5));
    }
    useEffect(() => {
        GetNews();
    }, []);
    return (
        <div className="upcoming">
            <h1 className="upcoming-title">Anime News</h1>
            <div className="list animeCard">
                {News.map(news => (
                    <a
                        href={news.url}
                        className="title"
                        target="_blank"
                        key={news.mal_id}
                        rel="noopener noreferrer">
                        <figure>
                            <img src={news.images.jpg.image_url} className="anime" alt="Anime thumbnail" />
                        </figure>
                        <h3> {news.title} </h3>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default AnimeNews;