import { useState } from "react";


function Toggle(){
    const [visivel, setVisivel] = useState(true);

    const alternar = () => {
        setVisivel((prev) => !prev)
    };

    return(
        <div>
            <h2>Toggle</h2>

            <button onClick={alternar}>
                {visivel ? "Ocultar" : "Mostrar"}
            </button>

            {visivel && (
                <p>Este texto pode ser exibido ou ocultado</p>
            )}
        </div>
    )
}

export default Toggle