const express = require('express');
const server = express();
const router = require("./routes/index")
const morgan = require("morgan")
const PORT = 3001;

server.use(express.json());// Esto hace que la informacion que a mi me llega en json la pueda pasar a obj de JS
server.use(morgan("dev"))


server.use((req, res, next) => { //Se usa una librerira en realidad
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use("/rickandmorty", router) //un middleware que agregue el string "/rickandmorty" antes de cada una de tus rutas.


server.listen(PORT, () => {
   console.log(`Server raised in port: ${PORT}` );
});




























//HOMEWORK VIEJA

// const http = require("http")
// const getCharById = require("./controllers/getCharById")

// http.createServer((req, res) => {

//     const {url} = req
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("rickandmorty/character")){
//         let id = req.url.split("/").pop()
//         getCharById(res, id)
//     }



// }).listen(3001, () => console.log("Port on 3001"))


//HOMEWORK MAS VIEJA

// const http = require("http") 
// const characters = require("./utils/data")

// http.createServer((req,res) => {

//     const {url} = req

//     res.setHeader('Access-Control-Allow-Origin', '*');


//     if(url.includes("rickandmorty/character")){

//         let urlId = url.split("/").pop()
//         let found = characters.find((character) => character.id === Number(urlId))

//         res.writeHead(200, {"content-type": "application/json"})
//         res.end(JSON.stringify(found))
//     }

// }).listen(3001)