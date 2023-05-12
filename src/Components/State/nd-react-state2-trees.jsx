// 1. Sukurti aplikaciją, atvaizduojančią žalią stačiakampį (laukas) padalinta į tris stulpelius (stačiakampius) ir tris mygtukus “ąžuolas”, “beržas” ir “uosis”. Paspaudus vieną iš mygtukų žaliame kvadrate atsiranda mažesnis kvadratas su medžio pavadinimu viduje. Svarbu, kad visi medžiai žaliame kvadrate būtų suskirstyti į tris stulpelius pagal medžio pavadinimą.

import { useState } from 'react';

export default function Trees() {


    

    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 30, margin: "30px 0"}}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30, margin: "30px 0"}}>
                <div className="rectangle-green"></div>
                <button className='button-trees'>Ąžuolas</button>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30, margin: "30px 0"}}>
                <div className="rectangle-green"></div>
                <button className='button-trees'>Beržas</button>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30, margin: "30px 0"}}>
                <div className="rectangle-green"></div>
                <button className='button-trees'>Uosis</button>        
            </div>
        </div>
    );
}