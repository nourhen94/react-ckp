import logo from './logo.svg';
import './App.css';
import Formbt from './component/Formbt';
import Navbarbt from './component/Navbarbt';

function App() {
  return (
    <div  className="App">
      <header style={{backgroundColor:"blue"}} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{fontSize: 100 }}>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          welcome 
        </p>
      <Navbarbt />
      <Formbt />
      </header>
    </div>
  );
}

export default App;
