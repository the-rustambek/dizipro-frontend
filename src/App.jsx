import logo from './logo.svg';
import './App.scss';

function App() {
  const isTrue = true;
  return (
    <>
    <Header>
      <h1>Salom sayt</h1>
    </Header>
    <div className="App">
      {isTrue && <h2>Salom dunyo</h2>}
    </div>
    <p>Test</p>
    </>
  );
}


function Header({children}){
  console.log(children);
  return <header>{children}</header>;
}

export default App;
