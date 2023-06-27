const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  return fetch(`${BASE_URL}/character`);
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