import { useState } from "react";
import validations from "../validations";
import style from "../App.module.css"


const Form = ({login}) => {
    
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    }); 

    const [errors, setErrors] = useState({});
    
    const handleChange = (event) => {
        setUserData({
            ...userData,    
            [event.target.name]: event.target.value
        })

        setErrors(validations({ //lo que me va a retornar la función, se me va a aguardar en mi estado Errors
            ...userData, //Le paso el objeto que guarda la información que esta ingresando el user
            [event.target.name]: event.target.value // le digo que debe estar atento a modificar cualquier cosa en el estado, donde el usuario la cambie en el input
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }


    return (
   
        <form className={style.Formulario} onSubmit={handleSubmit}> 
            <label htmlFor="email" className={style.label}>EMAIL:</label>
            <input className={style.inputsito} onChange={handleChange} style={{margin: 10}} value={userData.email} type="text" name="email" placeholder="Ingrese su mail" />
            {errors.email && <p style={{color: "#3a5a40"}}>{errors.email}</p>}
            <br />
            <label htmlFor="password" className={style.label}>PASSWORD:</label>
            <input className={style.inputsito} onChange={handleChange} style={{margin: 10}} value={userData.password} type="password" name="password" placeholder="Ingrese su contraseña" />
            {errors.password && <p style={{color: "#3a5a40"}}>{errors.password}</p>}

            <button className={style.submit} style={{alignItems: "center"}} type="submit">Submit</button>
        </form>
  
    )
}

export default Form;
