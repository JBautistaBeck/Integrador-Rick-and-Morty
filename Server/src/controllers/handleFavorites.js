let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body

    myFavorites.push(character)

    res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id ) // el mas parsea el string id, lo pasa de string a numero

    return res.status(200).json(myFavorites)
}


module.exports = { postFav, deleteFav}