import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "../App.module.css"



const Nav = ({onSearch, logOut}) => {

    return(
    
        <nav className={style.nav}>
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

