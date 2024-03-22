import styles from './Projects.module.css'
import Post from '../elements/Post'
import Designing from '../../Images/Designing.svg'
import Vibrant from '../../Images/Vibrant.svg'
import DaysOf from '../../Images/DaysOf.svg'


function Projects(){
    return(
        <div id='Projects' className={styles.projects} >
            <div>
            <h1>Projetos</h1>
            <Post
                img={Designing}
                title='Designing Dashboards' 
                description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
                            amet sint. Velit officia consequat duis enim velit mollit. Exercitation 
                            veniam consequat sunt nostrud amet.' 
                site=''
            />

            <Post
                img={Vibrant}
                title='Vibrant Portraits of 2020'  
                description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
                            amet sint. Velit officia consequat duis enim velit mollit. Exercitation 
                            veniam consequat sunt nostrud amet.' 
                site=''
            />
             <Post
                img={DaysOf}
                title='36 Days of Malayalam type'  
                description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
                            amet sint. Velit officia consequat duis enim velit mollit. Exercitation 
                            veniam consequat sunt nostrud amet.'   
                site=''
            />
            </div>
        </div>
    )
}

export default Projects