import Pokemon from "./Pokemon";
import logo from "./pokemon_logo.png";


function App() {
  return (
    <div className="App">
        <img src={logo} className='logo'/>
            <Pokemon/>
    </div>
  );
}

export default App;
