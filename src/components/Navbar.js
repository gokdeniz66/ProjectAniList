import React from 'react';
import Card from './Card';

function Navbar(props) {

    if (!props.animeList) {
        return (
            <section>
                <div className="error-msg">We couldn't find that specific anime.</div>
                <div className="error-msg"><button className="retry-button" onClick={() => window.location.reload(false)}>Try again</button></div>
            </section>
        )
    }

    return (
        <main>
            <nav className="navbar" >
                <img src={props.img} alt="logo" className="logo" />
                <a className="navtext" href="#manga">Manga</a>
                <form onSubmit={props.HandleSearch}>
                    <input type="input" className="searchbar search-icon" placeholder="Search here ..." required
                        value={props.search}
                        onChange={e => props.SetSearch(e.target.value)} />
                </form>
            </nav>
            <div className="list">
                {props.animeList.map(anime => (
                    <Card
                        anime={anime}
                        key={anime.mal_id}
                    />
                ))}
            </div>
        </main>
    )
}

export default Navbar;


