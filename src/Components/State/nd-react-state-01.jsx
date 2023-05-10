// 1. Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.
import { useState } from 'react';

export default function State01() {

    const [shape, setShape] = useState("0");
    const changeShape =_=> {
        setShape(shape === "0" ? "50%" : "0");
    } 

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30}}>
            <div style={{display: "flex", gap: 30}}>
                <button className="button" onClick={changeShape}>CHANGE</button>
            </div>

            <div className="btn-shapes" style={{borderRadius: shape}}></div>
        </div>
    );
}