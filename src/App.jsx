import './App.scss';
import {Base01, Base02, Base03, Base04, Base05} from "./Components/Base-list/nd-react-base";
import {DogInSquare, DogInCircle, DogInShape, DogBigLetter, DogColor} from "./Components/Base-list/nd-react-base-list";
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
        
        {/*<Base01 />*/}
        {/*<Base02 text='Ką veiki?'/>*/}
        {/*<Base03 animals={1}/>*/}
        {/*<Base04 p1='Saturnas' p2='Plutonas'/>*/}
        {/*<Base05 t1='Sodas ir daržas' t2='Kiemas' textColor='green'/>*/}

        {/*<DogInSquare />*/}
        {/*<DogInCircle />*/}
        {/*<DogInShape />*/}
        {/*<DogBigLetter />*/}
        {/*<DogColor />*/}
        
        {/*<Dogs />*/}
        
      </header>
    </div>
  );
}

export default App;