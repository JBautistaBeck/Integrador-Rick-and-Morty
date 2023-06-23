import { connect } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";


const Favorites = ({favorites}) => {

    const [ aux, setAux ] = useState(false)

    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return(
    <div>
        <select onChange={handleOrder}>
            <option value="A">Asendente</option>
            <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>

            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>

        </select>


        <div>
            <Cards characters={favorites}/>
        </div>
    </div>
    )
 }

 const mapStateToProps = (state) => {
    return {
        favorites: state.myFavorites,
    }
 }

 export default connect(mapStateToProps, null)(Favorites);