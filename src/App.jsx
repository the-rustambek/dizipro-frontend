
import './App.scss';

import {useState} from "react";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Header from './components/Header';


function App() {
  
  return <BrowserRouter>
    <Header />
    <Route exact path="/" name="Home" component={Home} />
    <Route exact path="/about" name="About" component={About} />


  </BrowserRouter>




}

export default App;
