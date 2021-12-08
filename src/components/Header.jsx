import { useEffect,useContext } from "react";
import {Link} from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import ColorContext from "../contexts/ColorContext";



export default function Header(){

   
    const {token,setToken} = useContext(AuthContext);

    return (
        <header>
            <h1>Dizipro.uz</h1>
        
        <ul>
            <li>
                <Link className="superlink" to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            {token ? (
                <li>
                <Link to="/profile">Profile</Link>
            </li>
            ) : (
<li>
                <Link to="/login">Login</Link>
            </li>
            )}
            
         
        </ul>
        
        </header>
    )
}