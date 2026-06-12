import styles from "./Card.module.css";

function Card({ title, description, variant}){
    return(
        <>
        <div className={`$(styles.card) ${styles[variant]}`}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
        </>
    )
}

export default Card;