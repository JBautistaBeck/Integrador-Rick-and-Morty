import { Link } from "react-router-dom";
import style from "./About.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
                <Link to="https://www.instagram.com/bautista.beck/"><FontAwesomeIcon icon={faInstagram} /></Link>
                </button>

                <button>
                <Link to="https://www.linkedin.com/in/juan-bautista-mar%C3%ADa-beck-06a40026a/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                </button>

                <button>
                <Link to="https://github.com/JBautistaBeck"><FontAwesomeIcon icon={faGithub} /></Link>
                </button>
            </div>

        </div>
    )
}

export default About;