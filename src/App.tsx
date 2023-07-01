import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterList from './pages/CharacterList';
import CharacterDetails from './pages/CharacterDetails';
import EpisodeList from './pages/EpisodeList';
import EpisodeDetails from './pages/EpisodeDetails';
import LocationList from './pages/LocationList';
import LocationDetails from './pages/LocationDetails';
import LocationDetailsByName from './pages/LocationDetailsByName';
import Error from './components/Error/Error';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header'
import CardList from './components/CardsList/CardList.jsx'
import Footer from './components/Footer/Footer'

import RM from './assets/img/animated_chill.gif'
import RMPortal from './assets/img/portal_rym.png'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/personajes" component={CharacterList} />
        <Route exact path="/personajes/:id" component={CharacterDetails} />
        <Route exact path="/episodios" component={EpisodeList} />
        <Route exact path="/episodios/:id" component={EpisodeDetails} />
        <Route exact path="/ubicaciones" component={LocationList} />
        <Route exact path="/ubicaciones/:name" component={LocationDetailsByName} />
        <Route exact path="/ubicaciones/:id" component={LocationDetails} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
    
  );
};

const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="Rick and Morty" className="object-cover object-center h-full w-full" src={RM} />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <img alt="Rick and Morty" className="object-cover object-center h-full w-full" src={RMPortal} />
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 text-justify	">Prepárate para despegar en un viaje intergaláctico lleno de diversión y aventuras junto a tus personajes favoritos de la aclamada serie "Rick and Morty". Aquí, en nuestra página, hemos desbloqueado los secretos del Multiverso y hemos construido un enlace directo con el increíble universo animado de Rick Sanchez y su nieto Morty Smith.</p>
                <p className="leading-relaxed text-lg mb-4 text-justify	">Así que adelante, aventurero, ponte tu bata de laboratorio, prepárate para un "Wubba lubba dub dub" y comienza a explorar todo lo que nuestra página tiene para ofrecerte.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;