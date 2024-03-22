import styles from '../elements/Post.module.css'
import {useState} from 'react'

function Post({img, title, description, site}){

    const [info, setInfo] = useState (false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={InfoOff} className={styles.post}>
            <a onMouseEnter={InfoOn} href={site}>
                <img src={img} alt='ERRO'/>
            </a>

            {info === true && (
                <section>
                    <h3>{title}</h3>
                    
                    <p>{description}</p>
                    
                </section>
            )}
        </div>
    )
}

export default Post