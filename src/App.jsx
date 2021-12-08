import './App.scss';

import {useContext, useState} from "react";
import { BrowserRouter,Redirect, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Header from './components/Header';
import ColorContext, { ColorProvider } from './contexts/ColorContext';
import AuthContext, { AuthProvider } from './contexts/AuthContext';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';


function App() {

const [color, setColor] = useState("white");


return(
<ColorProvider>
  <AuthProvider>
    <BrowserRouter>
      <Header />
      <Route exact path="/" name="Home" component={Home} />
      <Route exact path="/login" name="Login" component={Login} />
      <Route exact path="/about" name="About" component={About} />
      <ProvidedRoute exact path="/Profile" name="Profile" component={Profile} />
    </BrowserRouter>
  </AuthProvider>
 
</ColorProvider>

)



}

export default App;


function ProvidedRoute(...props){
  const {token,setToken} = useContext(AuthContext);

  if(!token){
    return (
      <Redirect to={{
        pathname: "/",
      }} />
    )
  }
  return <Route {...props[0]} />
}