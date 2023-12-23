import axios from 'axios';

const cache = new Map();

export const http = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 10000
});

async function get(url) {
  if (cache.has(url)) return cache.get(url);

  const resposta = (await http.get(url)).data;
  cache.set(url, resposta); 
  return resposta;
}

export async function buscarPokemonPorNome(nome) {
  const url = `pokemon/${nome}`;
  return get(url);
}

export async function listarPokemons(offset, limit) {
  const url = `pokemon?offset=${offset}&limit=${limit}`;
  return get(url);
}

export async function buscarGeracoes() {
  const url = "generation";
  return get(url);
}

export async function detalharGeracao(nome) {
  const url = `generation/${nome}`;
  return get(url);
}

export async function buscarLocation() {
  const url = "location";
  return get (url);
}


export async function buscarTipos() {
  const url = "type";
  return get(url);
}

export async function detalharTipo(nome) {
  const url = `type/${nome}`;
  return get(url);
}

export async function buscarMovimentos() {
  const url = "move";
  return get(url);
}

export async function detalharMovimentos(nome) {
  const url = `move/${nome}`;
  return get(url);
}


