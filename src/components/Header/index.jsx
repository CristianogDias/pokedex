import styles from "./Cabecalho.module.css";
import BuscaInput from "components/BuscaInput";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="/" style={{textDecoration: "none"}}>
      </Link>
      <BuscaInput placeholder="Informe um Pokémon..." />
    </header>
  );
}
