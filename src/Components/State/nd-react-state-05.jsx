// 5. Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daugiau kvadratų. Paspaudus reset viskas išsitrina

import { useState } from 'react';

export default function State04() {
    
    const [squareBlueList, setSquareBlueList] = useState([]);
    const addSquareBlue= _ => setSquareBlueList(squareNew => [...squareNew, squareBlueList]);

    const [squareRedList, setSquareRedList] = useState([]);
    const addSquareRed= _ => setSquareRedList(squareNew => [...squareNew, squareRedList]);

    const resetSquare = _ => {
        squareBlueList([]);
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30, maxWidth:"80%", margin: "30px 0"}}>
            <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                <button className="button" style={{backgroundColor: "red", color: 'white'}} onClick={addSquareRed}>ADD RED</button>
                <button className="button" style={{backgroundColor: "blue", color: 'white'}} onClick={addSquareBlue}>ADD BLUE</button>
                <button className="button" style={{backgroundColor: "gray", color: 'white'}} onClick={resetSquare}>RESET</button>
            </div>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    squareBlueList.map((_, i) => <div className="square-blue" key={i}></div>)
                }
            </div>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    squareRedList.map((_, i) => <div className="square-red" key={i}></div>)
                }
            </div>
        </div>

    );
}

