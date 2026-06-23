import { useState } from "react";

function Visor({ contador }){
    return(
        <div>
            <h2>Cotador: {contador}</h2>
        </div>
    )
};

function Controles({ contador, setContador }){
    return(
        <div>
            <button onClick={() => setContador(contador + 1)}>
                Incremenatar
            </button>

              <button onClick={() => setContador(contador - 1)}>
                Decremenatar
            </button>
        </div>
    )
};

export default function PianelControle(){
    const [contador, setContador] = useState(0)

    return(
        <div>
            <h1>Painel de Controle</h1>

            <Visor contador={contador}/>

            <Controles 
            contador={contador}
            setContador={setContador}
            />
        </div>
    )
}