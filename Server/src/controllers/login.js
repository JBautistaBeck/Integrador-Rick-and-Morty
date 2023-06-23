const users = require("../utils/users")

const login = (req, res) => {
    const { email, password } = req.query

    const userFound = users.find((user) => user.email === email && user.password === password )

    return userFound
    ? res.status(200).json({access: true})
    : res.status(404).json({access: false})//Dai dijo que mejor 404
    // lo de arriba es lo mismo que de lo de abajo!!!!! La de arriba ternario

    //if(userFound) return res.status(200).json({access: true})
    //return res.status(200).json({access: false})

}

module.exports = { login }