import SearchBar from "../SearchBar/SearchBar";
//import style from "./NavBar.module.css"
import { NavLink } from "react-router-dom"
import style from "./NavBar.module.css"

const   NavBar = ({onSearch, random}) => {
    return(
        <div className={style.container}>

            <div className={style.buttonsContainer}>
                <button>
                    <NavLink to="/about">ABOUT</NavLink>
                </button>

                <button>
                    <NavLink to="/home">HOME</NavLink>
                </button>

                <button>
                    <NavLink to="/favorites">FAVORITES</NavLink>
                </button>
            </div>


            <SearchBar onSearch={onSearch}/>

            <div className={style.randomContainer}>
                <button className={style.botonRandom} onClick={()=>random()}>RANDOM</button>
            </div>
        </div>
    )
}

export default NavBar;