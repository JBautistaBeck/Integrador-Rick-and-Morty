import { useState } from "react";
import style from "./Form.module.css"

const validate = (user) =>{
    let errors = {}

    if(!user.email){
        errors.email = "Enter your email"
    }
    if(!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(user.email)){
        errors.email = "Invalid email"
    }
    if(user.email.length >= 35){
        errors.email = "Invalid email"
    }

    if(!/\d/.test(user.password)){
        errors.password = "Password must contain a number"
    }
    if(user.password.length < 6 || user.password.length > 10) {
        errors.password = "Password must be between 6 and 10 characters"
    }

    return errors
}

const Form = ({login}) => {

    const [ user, setUser ] = useState({email: "", password: "",})

    const [ errors, setErrors ] = useState({email: "", password: "",})

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })

        setErrors(validate({
            ...user,
            [e.target.name]:e.target.value
        }))
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!errors.email && !errors.password){
            login(user)
        } else {
            alert("Incorrect Data")
        }
    }

    return(
        <div className={style.container}>  
            <div className={style.titulo}>
                <h1>Fill Your Credentials</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={style.credentials}>
                    <label>Email</label>
                    <input type="text" placeholder="Ingresa tu correo" value={user.email} name="email" onChange={handleChange}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                
                <div className={style.credentials}>
                    <label>Password</label>
                    <input type="password" placeholder="Ingresa tu contraseña" value={user.password} name="password" onChange={handleChange}/>
                    {errors.password && <span>{errors.password}</span>}
                </div>

                <button className={style.submitButton} type="submit">Submit</button>

            </form>
        
        </div>
    )
}

export default Form;