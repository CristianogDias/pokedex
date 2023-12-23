import styles from "./PaginaErro.module.css";

export default function PaginaErro() {
  let mensagem = "Essa página ainda não existe";

  return (
    <main className={styles.container}>
      <h3 className={styles.subtitulo}>
        {mensagem}
      </h3>
      <br/>
      <br/>
    </main>
  );
}