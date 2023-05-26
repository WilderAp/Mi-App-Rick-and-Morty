import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "../App.module.css"


const Detail = () => {

    // const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
    // const API_KEY = '93b596bf53e5.bdef19f6fc7819a8dc2b';
    
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => { //response.data
           if (data.name) {
              setCharacter(data);
           } 
        });
        return setCharacter({});
    }, [id]); //Se le pone el Array de dependencias al useEffect para que no haga llamadas infinitas a la API

    return(

        <div className={style.Detail}>
            {
                character && <div>
                    <div className={style.DetailImage}>
                    <img src={character.image} alt={character.name}/>
                    </div>
                    <h1 className={style.DetailName}>{character.name}</h1>
                    <h2>Status | {character.status}</h2>
                    <h2>Specie | {character.species}</h2>
                    <h2>Gender | {character.gender}</h2>
                    <h2>Origin | {character.origin?.name }</h2>


                    {/* <h2>{character?.name}</h2>
                    <h2>{character?.status}</h2>
                    <h2>{character?.species}</h2>
                    <h2>{character?.gender}</h2>
                    <h2>{character?.origin?.name}</h2>
                    <img src={character?.image} alt={character?.name} /> */}

                </div>
            }
        </div>
    )
}

export default Detail;  