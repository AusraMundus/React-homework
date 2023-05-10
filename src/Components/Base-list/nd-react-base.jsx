// 1. Sukurti komponentą, kuris užrašytų “LABAS, ZUIKI!”. Raidžių spalva pink. Spalva tekstui nurodoma komponento viduje naudojant style.

function Base01() {
    return <p style={{color: 'pink', textTransform: "upperCase"}}>Labas, zuiki!</p>;
}

// 2. Sukurti komponentą, kuris gauną vieną props. Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.

function Base02({text}) {
    return <h1>{text}</h1>;
}

// 3. Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.

function Base03({animals}) {
    let colorAnimal = 'violet';
    if (animals === 1) {colorAnimal='blue'}
        else if (animals === 2) {colorAnimal='red'};
    
        return <h1 style={{color: colorAnimal}}>Zebrai ir Bebrai</h1>
}

// 4. Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage.

function Base04({p1, p2}) {
    return (
        <div>
            <h1>{p1}</h1>
            <h2>{p2}</h2>
        </div>
    )
}

// 5. Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.

function Base05({t1, t2, textColor}) {
    return (
        <div>
            <h1 style={{color: textColor}}>{t1}</h1>
            <h2 style={{color: textColor}}>{t2}</h2>
        </div>
    )
}

export {Base01, Base02, Base03, Base04, Base05}