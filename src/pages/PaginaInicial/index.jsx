import NavBar from "components/NavBar";
import PokeFilter from "components/PokeFilter";
import { useState } from "react";

export default function PaginaInicial() {
  const [generation, setGeneration] = useState ('');
  const [type, setType] = useState ('');
  const [move, setMove] = useState ('');
  function selectFilter (filterName, filterValue){

    if(filterName === 'generation'){
      setGeneration (filterValue);
    }
    if(filterName === 'type'){
      setType (filterValue);
    }
    if(filterName === 'move'){
      setMove (filterValue);
    }

  }
  return(
    <div>
      <NavBar selectFilter={selectFilter}/>
      <PokeFilter filtro={{
        generation: generation,
        type: type,
        move: move
      }}/>
    </div>
  );
}

