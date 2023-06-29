import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CharacterList from './pages/CharacterList';
import CharacterDetails from './pages/CharacterDetails';
import EpisodeList from './pages/EpisodeList';
import EpisodeDetails from './pages/EpisodeDetails';
import LocationList from './pages/LocationList';
import LocationDetails from './pages/LocationDetails';
import Error from './components/Error/Error';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header'
import CardList from './components/CardsList/CardList.jsx'
import Footer from './components/Footer/Footer'

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
        <Route exact path="/ubicaciones/:id" component={LocationDetails} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

const Home = () => {
  return <h1>Home Page</h1>;
};

export default App;