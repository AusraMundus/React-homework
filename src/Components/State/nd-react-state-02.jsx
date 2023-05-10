// 2. Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25

import { useState } from 'react';
import rand from '../../Function/rand';

export default function State03() {

    const [number, setNumber] = useState(rand(5, 25));
    const randNumber =_=> {
        setNumber(rand(5, 25));
    }

    const [shape, setShape] = useState("0");
    const changeShape =_=> {
        setShape(shape === "0" ? "50%" : "0");
    } 

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30}}>
            <div style={{display: "flex", gap: 30}}>
                <button className="button" onClick={changeShape}>CHANGE</button>
                <button className="button" onClick={randNumber}>RANDOM</button>
            </div>

            <div className="btn-shapes" style={{borderRadius: shape}}>
                <h2>{number}</h2>
            </div>
        </div>
    );
}