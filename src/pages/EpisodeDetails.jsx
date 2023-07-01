import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEpisode, getCharactersByEpisode } from '../utils/Api';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';
import tv from '../assets/img/tv-episode.jpg'
import { goBack } from '../utils/Navigator'



const EpisodeDetails = () => {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEpisode();
    fetchCharacters();

  }, [id]);

  const fetchEpisode = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await getEpisode(id);
      const data = await response.json();
      setEpisode(data);
    } catch (error) {
      setError('Error fetching episode');
    } finally {
      setLoading(false);
    }
  };



  const fetchCharacters = async () => {
    try {
      const response = await getCharactersByEpisode();
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error('Error fetching characters', error);
    }
  };


  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }


  const charactersInEpisode = characters.filter((character) =>
  episode.characters.includes(character.url)
  );


  return (
    <>
      {episode && (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex items-center lg:w-full mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <img alt="tv-Box" class="w-20 h-25 rounded mr-4" src={tv} />
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-gray-900 text-lg title-font font-medium mb-2">
                  {episode.name}
                </h1>
                <p className="leading-relaxed text-base">
                  Air Date: <strong>{episode.air_date}</strong>
                </p>
                <p className="leading-relaxed text-base">
                  Episode: <strong>{episode.episode}</strong>
                </p>

                <a className="mt-3 text-indigo-500 inline-flex items-center" onClick={goBack}>
                  Volver
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2 text-center">Personajes que aparecen en este episodio:</h2>
            <div class="flex flex-wrap -m-3 align-middle text-align-center justify-center"  >
            {charactersInEpisode.map((character) => (
              <div class="xl:w-1/6 md:w-1/4 p-3 " key={character.id}>
                <div class="bg-gray-100 p-6 rounded-lg">
                  <Link to={`/personajes/${character.id}`}>
                  <img
                    class="h-25 rounded w-25 object-cover object-center mb-6"
                    src={character.image}
                    alt={character.name}
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                    {character.species}

                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  {character.name}
                  </h2>
                  </Link>
                </div>
              </div>
              ))}
            </div>

          </div>
        </section>
      )}
    </>
  );
};

export default EpisodeDetails;
