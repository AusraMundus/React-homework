import './App.scss';
import {LabasZuiki, Tekstas, Dryziai, Planetos, Namai} from "./Components/Base-list/nd-react-base";
import {SuoKvadrate, SuoApskritime, SuoFormose, DogBigLetter, DogsColor} from "./Components/Base-list/nd-react-base-list";
import Dogs from './Components/Base-list/pvz-dogs';
import State01 from './Components/State/nd-react-state-01';
import State02 from './Components/State/nd-react-state-02';
import State03 from './Components/State/nd-react-state-03';
import State04 from './Components/State/nd-react-state-04';
import State05 from './Components/State/nd-react-state-05';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        {/*<State01 />*/}
        {/*<State02 />*/}
        {/*<State03 />*/}
        {/*<State04 />*/}
        <State05 />
        
        {/*<LabasZuiki />*/}
        {/*<Tekstas text= 'Ką veiki?'/>*/}
        {/*<Dryziai stripes={1}/>*/}
        {/*<Planetos  p1='Saturnas' p2='Plutonas'/>*/}
        {/*<Namai t1='Sodas ir daržas' t2='Kiemas' textColor='green'/>*/}

        {/*<SuoKvadrate />*/}
        {/*<SuoApskritime />*/}
        {/*<SuoFormose />*/}
        {/*<DogBigLetter />*/}
        {/*<DogsColor />*/}
        
        {/*<Dogs />*/}
        
      </header>
    </div>
  );
}

export default App;