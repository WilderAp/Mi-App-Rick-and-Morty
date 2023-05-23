import Wilder from '../components/imagenes/Wilder.jpg'
import style from "../App.module.css"
import greenhearth from './imagenes/greenhearth.gif';

const About = () => {

    return(
      <div className={style.About}>
        <h1>☺ !HOLA SOY WILDER! ☺</h1>
      <div className={style.imgAbout}>
        <img src={Wilder} alt="Foto Creador" />
      </div>
        <h1>El creador de esta App <img style={{width: 35}} src={greenhearth} alt="Corazón verde" /></h1>
        <p>Hace no mucho estoy metido dentro
        del mundo de la programación, y me he 
        sentido bastante acogido por toda la comunidad 
        de programadores que interactúo, estoy complacido
        de haber entrado a Henry y aprender cada día más 
        a través de nuevos retos a diario! {':)'}, le 
        agradezco a Dios primeramente, y luego a mi familia
        por todo el apoyo inmerecido que he recibido de ellos.

        Proverbios 16:9
        "El hombre hace planes, pero es el Señor el que dirige sus pasos".
        </p>
      </div>  
    )
}

export default About;