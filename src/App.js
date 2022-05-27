import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Trending from "./components/Trending"
import AnimeNews from "./components/AnimeNews"
import Upcoming from "./components/Upcoming"
import ShowManga from './components/ShowManga';
import Footer from './components/Footer';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [UpcomingAnime, SetUpcomingAnime] = useState([]);
  const [Manga, SetManga] = useState([]);
  const [News, SetNews] = useState([]);
  const [search, SetSearch] = useState("");

  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search);
  }
  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`)
      .then(res => res.json());
    SetAnimeList(temp.results);
  }

  return (
    <div>
      <Trending
        topAnime={topAnime}
        SetTopAnime={SetTopAnime}
      />
      <Navbar
        img="./images/logoab.png"
        icon="./images/search-icon.png"
        HandleSearch={HandleSearch}
        search={search}
        SetSearch={SetSearch}
        animeList={animeList}
      />
      <AnimeNews
        News={News}
        SetNews={SetNews}
      />
      <Upcoming
        UpcomingAnime={UpcomingAnime}
        SetUpcomingAnime={SetUpcomingAnime}
      />
      <ShowManga
        Manga={Manga}
        SetManga={SetManga}
      />
      <Footer
      
      />
    </div>
  );
}

export default App;
