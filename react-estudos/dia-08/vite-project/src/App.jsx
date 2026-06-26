import produtos from "./data/produtos";
import FiltroLista from "./components/FiltroLista";

function App(){
    return(
        <div>
            <h1>Catálogo de Produtos</h1>

            <FiltroLista produtos={produtos}/>
        </div>
    )
}

export default App;