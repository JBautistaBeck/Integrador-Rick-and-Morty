import './App.css';
import Cards from './components/Cards/Cards.jsx';
import logo2 from './assets/pngegg.png'
import NavBar from './components/Nav/NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './Views/About/About';
import Detail from './Views/Deatil/Detail';
import ErrorPage from './Views/Error/Error';
import LandingPage from './Views/LandingPage/LandingPage';
import Favorites from './Views/Favorites/Favorites';



function App() {

   const [ characters, setCharacters ] = useState([])
   const [ access, setAccess ] = useState(false);//CAMBIAR AL FALSE

   const location = useLocation()
   const navigate = useNavigate();
   
   const EMAIL = 'beck@gmail.com';
   const PASSWORD = 'cata1234';

   const loginHandler = (userData) => {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   } else {
      alert("Contraseña o Usuario Incorrecto")
   }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const searchHandler = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
   }

   const closeHandler = (id) => {
      let deleted = characters.filter((character) => character.id !== Number(id))

      setCharacters(deleted)
   }


   const randomHandler = () => {
      let haveIt = []
      let random = (Math.random() * 826).toFixed()
      random = Number(random)


      if (!haveIt.includes(random)) {
        haveIt.push(random);
        fetch(`https://rickandmortyapi.com/api/character/${random}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          });
      } else {
        console.log("Ya agregaste todos los personajes");
        return false;
      }}




   return (
      
      <div className='App'>

         <img className= 'title' src={logo2} alt='logo' />
         {location.pathname !== "/" && <NavBar onSearch={searchHandler} random={randomHandler}/>} {/*Esto es un IF*/}
         
      <Routes>
         
         <Route path="/" element={<LandingPage login={loginHandler}/>}></Route>
         <Route path="/home" element={<Cards characters={characters} onClose={closeHandler} />}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/detail/:id" element={<Detail/>}></Route>
         <Route path="/favorites" element={<Favorites/>}></Route>
         <Route path="*" element={<ErrorPage/>}></Route>
         
      </Routes>

      </div>

   );
}
export default App;
