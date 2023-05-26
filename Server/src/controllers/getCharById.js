const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    const { id } = req.params;

  try {
    const response = await axios(`${URL}/${id}`)
    const dataApi = response.data
      
    const { status, name, species, origin, image, gender } = dataApi;

    const character = {
        id: id, 
        status: status,
        name: name,
        species: species, 
        origin: origin?.name, 
        image: image, 
        gender: gender,
    }
    if(dataApi.id){
      return  res.send(character);
    } else {
      return  res.status(404).send('Not found');
    }

  } catch (error) {
      res.status(500).send(error.message)
  } 
     
};

module.exports = getCharById;
