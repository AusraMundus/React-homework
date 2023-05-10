import './App.css';
import {LabasZuiki, Tekstas, Dryziai, Planetos, Namai} from "./Components/nd-react-base-1";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        <LabasZuiki />
        <Tekstas text= 'Ką veiki?'/>
        <Dryziai stripes={1}/>
        <Planetos  p1='Saturnas' p2='Plutonas'/>
        <Namai t1='Sodas ir daržas' t2='Kiemas' textColor='green'/>
        
      </header>
    </div>
  );
}

export default App;