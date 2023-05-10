import Style from "./pvz-dogs-style";

export default function Dogs() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <>
            <Style />
            <div className="sq-bin">

                {
                    dogs.map((d, i) => <div key={i} className="sq">{d}</div>)
                }

            </div>
        </>
    );
}