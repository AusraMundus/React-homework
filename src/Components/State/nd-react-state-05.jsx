// 5. Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daugiau kvadratų. Paspaudus reset viskas išsitrina

import { useState } from 'react';

export default function State05() {
    
    const [squareList, setSquareList] = useState([]);

    const addSquare = (color) => setSquareList(squareNew => [...squareNew, {color}]);

    const resetSquareList = () => {
        setSquareList([]);
    };

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30, maxWidth:"80%", margin: "30px 0"}}>
            <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                <button className="button" style={{backgroundColor: "red", color: 'white'}} onClick={() => addSquare('red')}>ADD RED</button>
                <button className="button" style={{backgroundColor: "blue", color: 'white'}} onClick={() => addSquare('blue')}>ADD BLUE</button>
                <button className="button" style={{backgroundColor: "gray", color: 'white'}} onClick={resetSquareList}>RESET</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {squareList.map((s, i) => (
                    <div
                        key={i}
                        style={{
                            width: '100px',
                            height: '100px',
                            backgroundColor: s.color,
                            border: '2px solid lightblue',
                            margin: '5px',
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}