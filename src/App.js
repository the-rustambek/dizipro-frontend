import logo from './logo.svg';
import './App.css';

function App() {
  const isTrue = true;
  return (
    <>
    <div className="App">
      {isTrue && <h2>Salom dunyo</h2>}
    </div>
    <p>Test</p>
    </>
  );
}

export default App;
