import { lazy, useEffect, useState } from "react";
import styles from "../../pages/PaginaInicial/PaginaInicial.module.css";
import { detalharGeracao } from "http";
import ListaPokemons from "components/PokeList";
import { detalharTipo } from "http";
//usar em funcao para invocar tipos
import { detalharMovimentos } from "http";
//usar em funcao para invocar movimentos

import Botao from "components/Button";
import SearchAction from "components/SearchAction";

export default function PokemonsFiltrados({ filtro }) {

  const [dados, setDados] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [isNotFilter, setIsNotFilter] = useState(false);
  
  async function searchFunc(){
    try {
      let pokemonsEncontrados = [];
      pokemonsEncontrados = (await detalharGeracao(filtro.generation)).pokemon_species;

      if (pokemonsEncontrados.length === 0) setIsNotFilter(true);
      
      pokemonsEncontrados = pokemonsEncontrados.sort((p1, p2) => {
        const p1Split = p1.url.split("/");
        const p2Split = p2.url.split("/");
        const idP1 = p1Split.at(p1Split.length - 2);
        const idP2 = p2Split.at(p2Split.length - 2);
        return Number(idP1) - Number(idP2);
      });
      setDados(pokemonsEncontrados);
      setPokemons(pokemonsEncontrados.slice(0, 28));
      setIsNotFilter(false);
    } catch {
      setIsNotFilter(true);
    }
  }


  function carregarMais() {
    setPokemons(dados.slice(0, pokemons.length + 28));
  }

  return (
    <main className={styles.container}>
      <SearchAction searchFunc={searchFunc}/>
      <h1 className={styles.titulo}>Buscar Pokemons</h1>
      <ListaPokemons  pokemons={pokemons}/>
      <div className={styles.botaoContainer}>
        {(dados.length > pokemons.length && dados.length > 0) && 
          <Botao onClick={carregarMais}>Carregar mais</Botao>
        }
      </div>
    </main>
  );
}