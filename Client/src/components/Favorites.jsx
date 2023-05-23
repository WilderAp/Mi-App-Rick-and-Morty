import { connect } from "react-redux";
import Card from "./Card";

const Favorites = ({ myFavorites }) => {


    return (
        <div>
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