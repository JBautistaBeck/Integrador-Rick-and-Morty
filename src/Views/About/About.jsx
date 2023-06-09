import { Link } from "react-router-dom";
import style from "./About.module.css"

const About = () => {
    return(
        <div>

            <h1>Esta es mi informacion!</h1>
            <h2>JUAN BAUTISTA MARÍA BECK</h2>
            <p>Edad: 24</p>
            <p>Direccion: Villa Allende, Cordoba</p>
            <p>Profesion: Estudiante de Henry</p>
            <div className={style.butonsContainer}>
                <button>
                <Link to="https://www.instagram.com/bautista.beck/">Instagram</Link>
                </button>

                <button>
                <Link to="https://www.linkedin.com/in/juan-bautista-mar%C3%ADa-beck-06a40026a/">Linkedin</Link>
                </button>

                <button>
                <Link to="https://github.com/JBautistaBeck">GitHub</Link>
                </button>
            </div>

        </div>
    )
}

export default About;