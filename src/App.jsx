import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header";
import {useState} from "react";
import {useEffect} from "react";

function App() {
  
  const test = () =>{
    let x = setInterval(() =>{
      setRaqam(raqam + 1);
    },1000);
  };
const [raqam,setRaqam] = useState(0);

  useEffect(test);
 
  return (
    <>
    <h1>{raqam}</h1>
    </>
  );
}

export default App;
