// 5. Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daugiau kvadratų. Paspaudus reset viskas išsitrina

import { useState } from 'react';

export default function State04() {
    
    const [squareList, setSquareList] = useState([]);
    
    const addSquareRed = _ => {
        setSquareList([...squareList, <div className="btn-red"></div>]);
    }
    
    const addSquareBlue = _ => {
        setSquareList([...squareList, <div className="btn-blue"></div>]);
    }

    const resetSquare = _ => {
        setSquareList([]);
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30, maxWidth:"80%"}}>
            <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                <button className="button" style={{backgroundColor: "red", color: 'white'}} onClick={addSquareRed}>ADD RED</button>
                <button className="button" style={{backgroundColor: "blue", color: 'white'}} onClick={addSquareBlue}>ADD BLUE</button>
                <button className="button" style={{backgroundColor: "gray", color: 'white'}} onClick={resetSquare}>RESET</button>
            </div>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {squareList}
            </div>
        </div>

    );
}

