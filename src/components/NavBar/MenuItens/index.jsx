import { useState } from "react";
import styles from "./MenuItens.module.css";
import Dropdown from "../Dropdown";

export default function MenuItens({itens, selectFilter}) {

  const [ativo, setAtivo] = useState(false);

  return (
    <li className={styles.menuItens}
    >
      <button 
        className={`${styles.menu} animate__animated animate__fadeIn`} 
        type="button" 
        aria-haspopup="menu"

        onMouseOver={() => setAtivo(!ativo)}
      >
        {itens.titulo}
      </button>
      <Dropdown setAtivo={setAtivo} submenus={itens.submenu} url={itens.url}  ativo={ativo}   selectFilter={selectFilter} />
    
    </li>
  );
}