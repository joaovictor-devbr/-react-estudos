import { useState } from "react";
import ListaProdutos from "./ListaProdutos";

function FiltroLista({ produtos }){
    const [busca, setBusca] = useState("");

    const produtosFiltrados = produtos.filter((produto) => 
        produto.nome.toLowerCase().includes(busca.toLowerCase())
    )

    return(
        <>
        <input 
        type="text"
        placeholder="Buscar produtos..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        />

        <ListaProdutos produtos={produtosFiltrados}/>
        </>
    )
}

export default FiltroLista;