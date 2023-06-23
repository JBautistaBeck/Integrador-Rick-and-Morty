import Form from "../../components/Form/Form"
import style from "./LandingPage.module.css"

const LandingPage = ({login}) => {
    return(
        <div className={style.form}>
            <Form login={login}/>
        </div>
    )
}

export default LandingPage;