import { useState  } from "react";

function Contador(){
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador((prev) => prev + 1);
    }

    const decrementar = () => {
        setContador((prev) => prev -1);
    }

    const resetar = () => {
        setContador(0);
    }

    return(
        <div>
            <h2>Contador</h2>

            <p>Valor: {contador}</p>

            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
            <button onClick={resetar}>Reset</button>
        </div>
    )
}

export default Contador;