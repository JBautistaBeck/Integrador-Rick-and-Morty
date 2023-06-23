const URL = "https://rickandmortyapi.com/api/character/"
const axios = require("axios")
const { response } = require("express")

const getCharById = async (req, res) => {
    try{
    const { id } = req.params

    const { data } = await axios(`${URL}/${id}`)
        
    const character = {
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        image: data.image,
        gender: data.gender,
        origin: data.origin?.name
        }

        character.name
            ? res.status(200).json(character)
            : res.status(404).send(`Not Found`)
        // if (character.name) {
        //     res.status(200).json(character);
        //   } else {
        //     res.status(404).send('Not Found');
        //   }
        
    } catch (error) {
        res.status(500).send(error.message)
    }

   
    
}

module.exports = { getCharById }























//HOMEWORK VIEJA

// const axios = require("axios")
// const URL = "https://rickandmortyapi.com/api/character/"

// const getCharById = (res, id) => {
//     axios(URL + id)
//     .then((response) => response.data)
//     .then((data) => {
//         const character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin?.name,
//             image: data.image,
//             status: data.status
//         }
//         res.writeHead(200, {"Content-type": "application/json"})
//         res.end(JSON.stringify(character))
//     })
//     .catch((error) => {
//         res.writeHead(500, {"Content-type": "text/plain"})
//         res.end(error.message)
//     })
// }

// module.exports = getCharById 