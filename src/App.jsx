import './App.scss';

import {useState} from "react";
import { BrowserRouter,Router, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Header from './components/Header';
import ColorContext from './contexts/ColorContext';


function App() {

const [color, setColor] = useState("white");  


return(
<div 
    style={{
    backgroundColor:color,
  }}>
  <ColorContext.Provider value={{color,setColor}}>
    <ColorContext.Consumer>
      {()=>(
     
     <BrowserRouter>
     <Header />
     <Route exact path="/" name="Home" component={Home} />
     <Route exact path="/about" name="About" component={About} />
   </BrowserRouter>

      )}
    </ColorContext.Consumer>
  </ColorContext.Provider>
</div>
)



}

export default App;