import { useState } from 'react';
import style from './SearchBar.module.css'


export default function SearchBar(props) {
   const {onSearch} = props;

   const [ id, setId ] = useState("")

   const handleChange = (e) => { 
      e.preventDefault() //Para prevenir bugs en la pagina
      let input = e.target.value

      setId(input)
   }

   return (
      <div className={style.contenedorSb}>

         <input className={style.buscador} type='search' value={id} onChange={handleChange }/>
         <button className={style.boton} onClick={()=>onSearch(id)}>Agregar</button> 

      </div>
   );
}
