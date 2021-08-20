import { useState, useEffect } from 'react';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Maincontent from './components/Maincontent';




function App() {

  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState('');


  // Fetch top anime
  const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		SetTopAnime(temp.top.slice(0, 20));
	}


  // Search Anime
  const handleSearch = e => {
    e.preventDefault();
    fetchAnime(search);
  } 

  // Fetch Anime
  const fetchAnime = async(query) =>{
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title`)
			.then(res => res.json());
      // console.log(temp.results)
		SetAnimeList(temp.results);
  }

  useEffect(() => {
		GetTopAnime();
    fetchAnime();
    
	}, []);

  return (
    <div className="app">
      <Header />
      {/* <Navigation /> */}
      <div className="content-wrapper">
        <Sidebar 
          topAnime = {topAnime}
        />
        <Maincontent  
          handleSearch = {handleSearch} 
          search={search} 
          SetSearch = {SetSearch}
          animeList = {animeList}/>
      </div>
    </div>
  );
}

export default App;
