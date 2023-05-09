function LabasZuiki() {
    return <p style={{color: 'pink'}}>LABAS, ZUIKI!</p>;
}

function Tekstas({text}) {
    return <h1>{text}</h1>;
}

function Dryziai({xxx}){
    let spalva = 'violet';
    if (xxx===1) {spalva='blue'}
    else if (xxx===2) {
        spalva='red'};
        return <h1 style={{color: spalva}}>Zebrai ir Bebrai</h1>
}

function Namai ({t1, t2, textColor}) {
    return (
        <div>
            <h1 style={{color: textColor}}>{t1}</h1>
            <h2 style={{color: textColor}}>{t2}</h2>
        </div>
    )
}


export {LabasZuiki, Tekstas, Dryziai, Namai}