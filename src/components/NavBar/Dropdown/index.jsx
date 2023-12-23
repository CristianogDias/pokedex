import { useState } from "react";
import styles from "./Dropdown.module.css";

export default function Dropdown({ submenus, url, ativo, selectFilter, setAtivo }) { 


  return (
    <div
      className={styles.dropdown} 
      style={{display: ativo ? "block" : "none"}}
    >
      {submenus.map(submenu => (
        <button
          className={styles.submenu}
          key={`${url}/${submenu}`} 
          onClick={() => selectFilter(url, submenu, setAtivo(false))}
        >
          {submenu}
        
        </button>
      ))}
    </div>
  );
}