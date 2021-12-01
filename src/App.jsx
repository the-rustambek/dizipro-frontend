import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header";

function App() {
  const isTrue = true;
  return (
    <>
    <Header />
    <div className="App">{isTrue &&  <h2>Salom dunyo</h2>}</div>
    
    </>
  );
}




export default App;
