import { useEffect,useContext } from "react";
import {Link} from "react-router-dom";
import ColorContext from "../contexts/ColorContext";



export default function Header(){
    useEffect( () =>{
        console.log("Header yuklandi...");
 
        return () =>{
            console.log("Xayr header")
        };
    });
   
    const {color,setColor} = useContext(ColorContext);
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
                <button onClick={() =>{
                    setColor("red");
                }}>Meni bos</button>
            </li>
        </ul>
        
        </header>
    )
}