import { useEffect } from "react";
import {Link} from "react-router-dom";


export default function Header(){
    useEffect( () =>{
        console.log("Header yuklandi...");
 
        return () =>{
            console.log("Xayr header")
        }
    })
   
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
            <li>
                <Link to="/contact">COntact</Link>
            </li>
        </ul>
        
        </header>
    )
}