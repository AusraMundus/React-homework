// 4. Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus dar kartą- dar vienas ir t.t.

import { useState } from 'react';

export default function State04() {
    
    const [squareList, setSquareList] = useState([]);
    const addSquare = _ => setSquareList(squareNew => [...squareNew, squareList]);

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30, maxWidth:"80%", margin: "30px 0"}}>
            <button className="button" onClick={addSquare}>ADD</button>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    squareList.map((_, i) => <div className="square-blue" key={i}></div>)
                }
            </div>
        </div>

    );
}

