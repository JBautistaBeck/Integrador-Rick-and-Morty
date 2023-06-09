//import React from "react";
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { add_fav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import style from './Card.module.css'

function Card(props) {

   const {character, onClose, add_fav, removeFav, favorites} = props;
   const [ isFav, setIsFav ] = useState(false)


   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [favorites]);

   function handleFavorite(character) {/*data=character*/
      if (!isFav) {
        add_fav(character);
        setIsFav(true);
      } else {
        removeFav(character);
        setIsFav(false);
      }
   }

   return (
      <div className={style.cardPrincipal}>
         <div className={style.imgContenedor}>
             <img className={style.img} src={character.image} alt={character.name} />

            <Link to= {`/detail/${character.id}`}>
            <h2>{character.name}</h2>
            </Link>

            {isFav ? (<button onClick={() => handleFavorite(character.id)}>❤️</button>) : (<button onClick={() => handleFavorite(character)}>🤍</button>)}

            <button onClick={()=> onClose(character.id)} className={style.cerrarBoton}>X</button>
         </div>
        
        <div className={style.caracteristicas}>
         
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
        </div>
         
      </div>
   );
}


const mapDispatchToProps = (dispatch) => {

   return {
      add_fav: (character) => {
         dispatch(add_fav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state) => {
   return {
      favorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

//image: imagen.