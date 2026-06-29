import { jogos } from "./data/jogos"
import GameCard from "./components/GameCard"

function App(){
    return(
        <main>
            <h1>Biblioteca de Jogos</h1>

            <section>
                {jogos.map((jogo) => (

                    <GameCard

                    key={jogo.id}
                    jogo={jogo}

                    />
                ))}
            </section>
        </main>
    )
}

export default App;