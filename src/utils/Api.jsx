const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page = 1) => {
  return  fetch(`${BASE_URL}/character?page=${page}`);
};

export const getCharacter = async (id) => {
  return fetch(`${BASE_URL}/character/${id}`);
};

export const getEpisodes = async (page = 1) => {
  return fetch(`${BASE_URL}/episode?page=${page}`);
};

export const getEpisode = async (id) => {
  return fetch(`${BASE_URL}/episode/${id}`);
};

export const getLocations = async (page = 1) => {
  return fetch(`${BASE_URL}/location?page=${page}`);
};


export const getLocation = async (id) => {
  return fetch(`${BASE_URL}/location/${id}`);
};

