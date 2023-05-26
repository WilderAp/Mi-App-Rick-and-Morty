let myFavorites = [];

const postFav = (req, res) =>{
    const character = req.body;

    myFavorites.push(character);

    return res.status(200).json(myFavorites)
};

const deleteFav = (req, res) =>{
    const {id} = req.params

    myFavorites = myFavorites.filter(char => char.id !== id); // ERROR: ESTABA CREANDO UNA CONSTANTE myFavorites, y filtrando el array en esa, pero debía pisar el valor de la original
                                                             // ERROR2: ESTABA PARSEANDO EL ID Q YA HABÍA SIDO PARSEADO (NO ERROR MÍO SINO DE LA HOMEWORK T.T)
    return res.json(myFavorites); //Un array actualizado es lo que me va a mostrar en Favorites
} //En la lógica de la BD si vamos a eliminar realmente algo, no como ahora q solo mostramos un arreglo actualizado.


module.exports = {
    postFav,
    deleteFav,
}