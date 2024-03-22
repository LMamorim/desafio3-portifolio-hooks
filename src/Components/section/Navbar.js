import styles from '../section/Navbar.module.css'


function Navbar(){
    return (
        <div className={styles.navbar}>
            <ul>
                <li><a href='#Projects'>Projetos</a></li>
                <li><a href='#Blog'>Blog</a></li>
                <li><a href='#Contato'>Contato</a></li>
            </ul>
        </div>
    )
}

export default Navbar