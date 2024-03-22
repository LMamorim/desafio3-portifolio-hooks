import styles from './Card.module.css'

function Card({title, date, obj, description}){
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <header>
                <p>{date}</p> 
                <p>{obj}</p>   
            </header>
            <p>
               {description}
            </p>      
        </div>
    )
}

export default Card