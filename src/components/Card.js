import React from 'react'

function Card(props) {
    return (
        <article className="animeCard">
            <a
                href={props.anime.url}
                className="title"
                target="_blank"
                rel="noopener noreferrer">
                <figure>
                    <img src={props.anime.image_url} className="anime" alt="Anime thumbnail" />
                </figure>
                <h3> {props.anime.title} </h3>
            </a>
        </article>
    )
}

export default Card;