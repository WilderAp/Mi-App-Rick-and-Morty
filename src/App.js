import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';

export const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
export const API_KEY = '93b596bf53e5.bdef19f6fc7819a8dc2b';

function App() {

   const [characters, setCharacters] = useState([])
   
   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== (id))
      setCharacters(characterFiltered)
   }

   return ( 
      <div className='App'>

         <Nav onSearch={onSearch}/>

         <Routes>
            <Route path='/About' element={<About/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/detail:id' element={<Detail/>}/>
         </Routes>


      </div>
   );
}

export default App;
