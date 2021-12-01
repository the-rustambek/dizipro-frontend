import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header";
import {useState} from "react";

function App() {
  
  const [count,setCount] = useState(1);
  

  const handlePress = () =>{
    setCount(count + 1);
  }
 
  return (
    <>
    <Header />
    <div className="App"><h2>{count}</h2></div>
    
    <button onClick={handlePress}>Meni bos</button>
    </>
  );
}




export default App;
