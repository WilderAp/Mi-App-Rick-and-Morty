import { useState } from "react";


export default function SearchBar({onSearch}) {
   
   const [id, setId] = useState('');
   const handleChange = event => {
      setId(event.target.value)
      
   }

   return (
      <div>
         <input placeholder="Buscar personaje" type='search' onChange={handleChange} value={id}/>
         <button onClick={()=>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
