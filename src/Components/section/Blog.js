import styles from './Blog.module.css'
import Card from '../elements/Card'


function Blog(){
    return(
        <div className={styles.blog} id='Blog' >
            <h1>Blogs</h1>
            
            <section>
                <Card
                    title='Making a design system from scratch'
                    date='12 Feb 2030'
                    obj='Design, Pattern'
                    description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                                sunt nostrud amet.'
                />

                <Card
                    title='Creating pixel perfect icons in Figma'
                    date='12 Feb 2030'
                    obj='Figma, Icon Design'
                    description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                                sunt nostrud amet.'
                /> 
            </section>
        </div>
    )
}

export default Blog