import { useState } from "react";

function InpuntControlado(){
    const [nome, setNome] = useState("")

    return(
        <div>
            <h2>Input Controlado</h2>

            <input 
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />

            <p>Você digitou: {nome}</p>
        </div>
    )
}

export default InpuntControlado;