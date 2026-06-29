import styles from "./GameCard.module.css";

function GameCard({ jogo }){
    return(
        <div className={styles.card}>

            <img src={jogo.capa} 
            alt={jogo.titulo}
            className={styles.capa}
            />

            <div className={styles.info}>

                <h2>{jogo.titulo}</h2>

                <p>
                    <strong>Gênero:</strong> {jogo.genero}
                </p>

                <span>{jogo.nota}</span>

            </div>

        </div>
    )
}

export default GameCard;