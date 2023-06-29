const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page = 1) => {
  return  fetch(`${BASE_URL}/character?page=${page}`);
};

export const getCharacter = async (id) => {
  return fetch(`${BASE_URL}/character/${id}`);
};

export const getEpisodes = async (page = 1) => {
  return fetch(`${BASE_URL}/episode?page=${page}`);
  // return fetch(`${BASE_URL}/episode`);
};

export const getEpisode = async (id) => {
  return fetch(`${BASE_URL}/episode/${id}`);
};

export const getLocations = async (page = 1) => {
  return fetch(`${BASE_URL}/location?page=${page}`);
  // return fetch(`${BASE_URL}/location`);
};


export const getLocation = async (id) => {
  return fetch(`${BASE_URL}/location/${id}`);
};

