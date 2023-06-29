const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page = 1) => {
  console.log('Page->'+ page);
  return fetch(`${BASE_URL}/character?page=${page}`);
};

export const getCharacter = async (id) => {
  return fetch(`${BASE_URL}/character/${id}`);
};

export const getEpisodes = async () => {
  return fetch(`${BASE_URL}/episode`);
};

export const getEpisode = async (id) => {
  return fetch(`${BASE_URL}/episode/${id}`);
};

export const getLocations = async () => {
  return fetch(`${BASE_URL}/location`);
};


export const getLocation = async (id) => {
  return fetch(`${BASE_URL}/location/${id}`);
};

