
import './App.scss';
import Header from "./components/Header";
import {useState} from "react";



function App() {
  
const [state, setState]
 = useState(true);


 return (
   <>
  {state && <Header />}
  <button onClick={() => setState(!state)} > Meni bos 
  </button>
   </>
 )



}

export default App;
