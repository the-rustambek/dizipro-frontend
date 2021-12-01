import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header";
import {useState} from "react";

function App() {
  
  const [todos,setTodos] = useState([]);
  

  const handleSubmit  =   (event) =>{
    event.preventDefault();

    setTodos([...todos,event.target[0].value]);

    event.target.reset();

  };
 
  return (
    <>
    <ul>
      {todos.map((todos,i) =>{
        return <li key = {i} >{todos}</li>;
      })}
    </ul>
    
  <form onSubmit={handleSubmit}>
    <input type="text" />
    <button >Meni bos</button>
  </form>
    </>
  );
}




export default App;
