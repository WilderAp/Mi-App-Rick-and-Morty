import style from "./SearchBar.module.css";
import { useState } from "react";


export default function SearchBar({onSearch}) {
   
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value)
      
   }

   return (
      <div className={style.container}>
         <input className={style.search} placeholder="Buscar personaje" type='search' onChange={handleChange} value={id} required/>
   
         <button onClick={()=>{onSearch(id); setId('')}}>ADD</button>
      </div>
   );
}
