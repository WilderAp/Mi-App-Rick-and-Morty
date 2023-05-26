import style from './App.module.css'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Forms/Form';
import Favorites from './components/Favorites';



// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '93b596bf53e5.bdef19f6fc7819a8dc2b';


function App() {
   
   const navigate = useNavigate()
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   // const [charRender, setCharRender] = useState(false);

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

   const logOut = () => {
      setAccess(false);
      navigate('/Form')
   }
   
   useEffect(() => {
      !access && navigate('/'); //la lógica de este useEffect, brutal! :)
   }, [access, navigate]); //No te mueves de aquí sin la validación 
   
   // useEffect(() => {

   // }, [charRender])
   
   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== (id))
      setCharacters(characterFiltered)
   };




   return ( 
      <div >
         
         {
           location.pathname !== '/' 
           ? <Nav onSearch={onSearch} logOut={logOut}/> 
           : null
         }
         

         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/About' element={<About/>}/>
            <Route path='/home' element={<Cards characters={characters}
            onClose={onClose}/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>} />
            
         </Routes>

      
      </div>
   );
}

export default App;
