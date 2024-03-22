import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from '../section/Footer.module.css'

function Footer(){
    return (
        <div id='Contato' className={styles.footer}>
            <ul>
                <li><a href=''><FaFacebook size={35}/></a></li>
                <li><a href=''><FaInstagram size={35}/></a></li>
                <li><a href=''><FaTwitter size={35}/></a></li>
                <li><a href=''><FaLinkedin size={35}/></a></li>
            </ul>

            <p>Copyright ©2020 All rights reserved</p>

        </div>
    )
}

export default Footer