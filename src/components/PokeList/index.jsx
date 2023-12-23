import Cards from "components/Cards";
import styles from "./ListaPokemons.module.css";

export default function ListaPokemons({ pokemons }) {
  return (
    <section className={`${styles.lista} animate__animated animate__bounceIn`}>
      {pokemons.length > 0 ? pokemons.map((pokemon) => (
        <Cards key={pokemon.name} pokemon={pokemon} />
      )): true}
    </section>
  );
}
