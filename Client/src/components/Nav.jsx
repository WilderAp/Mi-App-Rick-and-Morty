import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "../App.module.css"
import { GiHamburgerMenu } from "react-icons/gi"


const Nav = ({onSearch, logOut}) => {

    const ShowNavbar = () =>{
        const BurgerMenu = document.querySelector(".App_burgerMenu__Tzy9H");
        const Navbar = BurgerMenu.parentElement;
        if(Navbar.style.visibility === "visible"){
            Navbar.style.visibility = "hidden";
        }else{
            Navbar.style.visibility = "visible";
        }  
    }

    return(
    
        <nav className={style.nav}>
            <GiHamburgerMenu className={style.burgerMenu} color="#F2F2F2" size={"50px"} onClick={ShowNavbar}/>

            <button className={style.botones}>
                <Link to='/About'>About</Link>
            </button>
            
            <button className={style.botones}>
                <Link to='/favorites'>Favorites</Link>
            </button>

            <SearchBar onSearch={onSearch} className={style.busqueda}></SearchBar>

            <button className={style.botones}>
                <Link to='/home'>Home</Link>
            </button>
            
            <button className={style.logout} onClick={() =>{logOut()}}>Log Out</button>
            
        </nav>
    );
}

export default Nav;

