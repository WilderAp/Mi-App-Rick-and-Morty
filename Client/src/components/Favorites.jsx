import { connect, useDispatch } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards } from '../redux/actions';
import { useState } from "react";
import style from "../App.module.css"

const Favorites = ({ myFavorites }) => {
    const [aux, setAux] = useState(false); // Ni idea para q sirve este estado
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }


    return (
        
        <div>
            <h1 className={style.orderfav}>ORDENAR FAVORITOS</h1>

            <select className={style.favo} onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select className={style.favo} onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allcharacters">allcharacters</option>
            </select>
        {
            myFavorites?.map(char => { 
                return (
                    <Card
                        id={char.id}
                        name={char.name}
                        species={char.species}
                        gender={char.gender}
                        image={char.image}
                        onClose={char.onClose}
                    />
                )
            })
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(
    mapStateToProps,
    null,
)(Favorites);