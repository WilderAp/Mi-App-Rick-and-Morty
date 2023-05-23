import Card from './Card';
import style from "../App.module.css"

export default function Cards({characters, onClose}) {
   
   //const {characters} = props;

   return (
      <div >
        { 
         characters.map((character) => {
            return <Card 
               id = {character.id}
               key = {character.id}
               name = {character.name}
               status = {character.status}
               species = {character.species}
               gender = {character.gender}
               origin = {character.origin.name}
               image = {character.image}
               onClose={onClose}
            />
         })
        }
      </div>

   )
};

