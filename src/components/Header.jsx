import { useEffect } from "react/cjs/react.development"

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
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/contact">COntact</a>
            </li>
        </ul>
        
        </header>
    )
}