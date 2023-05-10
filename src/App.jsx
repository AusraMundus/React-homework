import './App.scss';
import {LabasZuiki, Tekstas, Dryziai, Planetos, Namai} from "./Components/nd-react-base";
import {SuoKvadrate, SuoApskritime, SuoFormose, DogBigLetter, DogsColor} from "./Components/nd-react-base-list";
import Button from './Components/nd-react-state';
import Dogs from './Components/pvz-dogs';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        <Button />
        
        <LabasZuiki />
        <Tekstas text= 'Ką veiki?'/>
        <Dryziai stripes={1}/>
        <Planetos  p1='Saturnas' p2='Plutonas'/>
        <Namai t1='Sodas ir daržas' t2='Kiemas' textColor='green'/>

        <SuoKvadrate />
        <SuoApskritime />
        <SuoFormose />
        <DogBigLetter />
        <DogsColor />
        
        <Dogs />
        
      </header>
    </div>
  );
}

export default App;