import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import CardList from './components/CardsList/CardList.jsx'
import Footer from './components/Footer/Footer'



function App() {
  const [characters, setCharacters] = useState([]);
  // const [filter, setFilter] = useState('');

  const [showModal, setShowModal] = useState(false);



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

  // const filteredCharacters = characters.filter(character =>
  //   character.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const orderChar = characters.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
  })
  console.log(orderChar)
  return (
    <>
      <Header />
      <Search />
      <CardList data={characters} />
      <Footer />
    </>
  )
}

export default App
