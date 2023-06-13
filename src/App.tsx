import { useState } from 'react'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import CardList from './components/CardsList/CardList.jsx'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

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
