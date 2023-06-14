import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import CardList from './components/CardsList/CardList'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const jsonData = await response.json();
      setData(jsonData.results);
      console.log(jsonData.results)
    };
    fetchData()
  }, []);
  return (
    <>   
    <Header />
    <Search />
    <CardList data={data} />
    <Footer />
    </>
  )
}

export default App
