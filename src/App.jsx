import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header";
import {useState} from "react";

function App() {
  
  const [active,setActive] = useState(false);
  
  // let active = false;

  // let setActive = (qiymat) =>{
  //   active = qiymat
  // }

  const handlePress = () =>{
    setActive(!active);
  }
 
  return (
    <>
    <Header />
    <div className="App">{active &&  <h2>Salom dunyo</h2>}</div>
    
    <button onClick={handlePress}>Meni bos</button>
    </>
  );
}




export default App;
