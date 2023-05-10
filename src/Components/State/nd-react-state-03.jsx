// 3. Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3

import { useState } from 'react';

export default function State03() {

    const [number, setNumber] = useState(0);
    const plusOne = _ => {
        setNumber(number + 1);
    }
    const minusThree = _ => {
        setNumber(number - 3);
    }

    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 20, maxWidth: "80%", margin: "30px 0"}}>
            <button className="button" onClick={minusThree}>-</button>
            <h2>{number}</h2>
            <button className="button" onClick={plusOne}>+</button>
        </div>
    );
}