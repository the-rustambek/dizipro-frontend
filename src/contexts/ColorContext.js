
import { Children } from "react";
import { createContext, useState } from "react";


const ColorContext = createContext("white");

export default ColorContext;



export function ColorProvider({children}){
    const [color,setColor] = useState("white");

    return (
        <ColorContext.Provider value={{color, setColor}}>
            <ColorContext.Consumer>
    {()=> children}
            </ColorContext.Consumer>

        </ColorContext.Provider>
    )
}