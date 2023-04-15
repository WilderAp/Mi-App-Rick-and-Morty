import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
export const API_KEY = '93b596bf53e5.bdef19f6fc7819a8dc2b';

const Detail = () => {
    
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => { //response.data
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]); //Se le pone el Array de dependencias al useEffect para que no haga llamadas infinitas a la API

    return(
        <div>
            {
                character && <div>
                    <h2>{character.name}</h2>
                    <h2>{character.status}</h2>
                    <h2>{character.species}</h2>
                    <h2>{character.gender}</h2>
                    <h2>{character.origin.name}</h2>
                    <img src={character?.image} alt={character?.name} />
                </div>
            }
        </div>
    )
}

export default Detail;  