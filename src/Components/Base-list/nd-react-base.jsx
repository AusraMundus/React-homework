// 1 užduotis
function LabasZuiki() {
    return <p style={{color: 'pink'}}>LABAS, ZUIKI!</p>;
}

// 2 užduotis
function Tekstas({text}) {
    return <h1>{text}</h1>;
}

// 3 užduotis
function Dryziai({stripes}){
    let spalva = 'violet';
    if (stripes===1) {spalva='blue'}
    else if (stripes===2) {
        spalva='red'};
        return <h1 style={{color: spalva}}>Zebrai ir Bebrai</h1>
}

// 4 užduotis
function Planetos ({p1, p2}) {
    return (
        <div>
            <h1>{p1}</h1>
            <h2>{p2}</h2>
        </div>
    )
}

// 5 užduotis
function Namai ({t1, t2, textColor}) {
    return (
        <div>
            <h1 style={{color: textColor}}>{t1}</h1>
            <h2 style={{color: textColor}}>{t2}</h2>
        </div>
    )
}

export {LabasZuiki, Tekstas, Dryziai, Planetos, Namai}