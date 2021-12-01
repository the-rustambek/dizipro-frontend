import logo from './logo.svg';
import './App.scss';

function App() {
  const isTrue = true;
  return (
    <>
    <Header color="red">
      <h1>Salom sayt</h1>
    </Header>
    <div className="App">
      {isTrue && <h2>Salom dunyo</h2>}
    </div>
    <p>Test</p>
    </>
  );
}


function Header({children,color}){
  
  return <header className={color === "red" ? "red": null}>{children}</header>;
}

export default App;
