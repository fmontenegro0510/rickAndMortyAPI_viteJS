import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import CardList from './components/CardsList/CardList.jsx'
import Footer from './components/Footer/Footer'



function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
<Header />
<Search />
<CardList />
<Footer />
    </>
  )
}

export default App
