import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEpisode, getCharactersByEpisode } from '../utils/Api';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';


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
      console.log(data)
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
      <h1>Episode Details</h1>
      {episode && (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  {episode.name}
                </h2>
                <p className="leading-relaxed text-base">
                  Air Date: <strong>{episode.air_date}</strong>
                </p>
                <p className="leading-relaxed text-base">
                  Episode: <strong>{episode.episode}</strong>
                </p>

                <a className="mt-3 text-indigo-500 inline-flex items-center">
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
            <div className="flex  lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-row ">
              <div className="grid w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                <div className="flex flex-wrap -m-2">
                  <ul>
                    {charactersInEpisode.map((character) => (
                      <div
                        className="p-2 w-full"
                        key={character.id}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src={character.image}
                            alt={character.name}
                          />
                          <div className="flex-grow">
                            <Link to={`/personajes/${character.id}`}>
                              <h2 className="text-gray-900 title-font font-medium">
                                {character.name}
                              </h2>
                              <p className="text-gray-500">
                                {character.species}
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default EpisodeDetails;
