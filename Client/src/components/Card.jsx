import style from "../App.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from '../redux/actions';
import { connect } from "react-redux";
import { useEffect, useState } from "react";


function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);
   
   
   const handleFavorite = () => { // (isFav)
      if(isFav){                 // if(!isFav)
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose}) //Le pasamos el personaje, de esta forma, ya que lo tenemos destructurado
      }   
   };
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   
   
   return (
      <div className={style.card}>
         <div className={style.favButton}>
         <button style={{backgroundColor: "transparent"}} onClick={handleFavorite}>{isFav ? '💙' : '🤍' }</button>
         </div>
         <button className={style.close} onClick={()=> {onClose(id)}}>〔X〕</button>
      
         <h2>{name}</h2> 
         <h3>{id}</h3>
         <Link to={`/detail/${id}`} >
         <img src={image} alt='character img' />
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>

      </div>
   );
}
      
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};


const mapDispatchToProps = (dispatch) => {
   return {
      addFav:  (character) => { dispatch(addFav(character)) }, //Ejecutamos addFav, porque necesitamos pasarle al reducer un objeto y no una función
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
};


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);