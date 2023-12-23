import { buscarGeracoes } from "http";
import MenuItens from "./MenuItens";
import styles from "./NavBar.module.css";
import { buscarTipos } from "http";
import { useEffect, useState } from "react";
import { buscarMovimentos } from "http";

export default function NavBar({selectFilter}) {

  const [menuItens, setMenuItens] = useState([]);

  useEffect(() => {

    async function buscarDados() {
      const geracoes = (await buscarGeracoes()).results;
      const type = (await buscarTipos()).results;
      const move = (await buscarMovimentos()).results;

      const itens = [
        {titulo: "Poke Geração", url: "generation", submenu: geracoes.map(g => g.name)},
        {titulo: "Tipo Ataque", url: "type", submenu: type.map(l => l.name)},
        {titulo: "Movimento", url: "move", submenu: move.map(r => r.name)}
      ];
      setMenuItens(itens);
    }

    buscarDados();

  }, []);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menus}>
        {menuItens.length > 0 && menuItens.map(menu => (
          <MenuItens itens={menu} key={menu.titulo} selectFilter={selectFilter}/>
        ))}
      </ul>
    </nav>
  );
}