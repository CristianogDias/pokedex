import styles from "./PaginaErro.module.css";
import Botao from "components/Button";

export default function SearchAction({searchFunc}) {

  return (
    <div className={styles.container}>
      <Botao onClick={() => searchFunc()}>Pesquisar</Botao>
    </div>
  );
}