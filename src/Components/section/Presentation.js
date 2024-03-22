import styles from './Presentation.module.css'
import {useEffect, useState} from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Desenvolvedor Full Stack!'];
    const [loop, setLoop] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 200;
    const [delta, setDelta] = useState(100);
    

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=>{clearInterval(ticker)}

    },[text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updateText);

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }


    return(
        <div className={styles.presentation} id='Presentation'>
            
            <h1>Olá, eu sou João<br/>{text}</h1>
            
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br/>
                sint. Velit officia consequat duis enim velit mollit. Exercitation <br/>
                veniam consequat sunt nostrud amet.
            </p>
            <button>Download resumo</button>
        </div>
    )
}

export default Presentation