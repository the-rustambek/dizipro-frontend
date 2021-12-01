import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header";
import {useState} from "react";
import {useEffect} from "react";

function App() {
  
  const test = () =>{
    console.log("test");
  };

  useEffect(test);
 
  return (
    <>
    <h1>test</h1>
    </>
  );
}




export default App;
