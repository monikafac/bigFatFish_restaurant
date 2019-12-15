import React from "react";
import styles from './Articles.module.scss';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Articles = (props) => {
    const articles=props.articles.map(article=>(
        <div key={article.id}>
        <div  className={styles.text2}>
        <p className={styles.title}>{`${article.title}`}</p>
        <p className={styles.text}>{`${article.text}`}</p>
        </div>
        </div>
      
    ))

    
    
    return ( 
        <div className={styles.articlesDiv}>
        <article className={styles.article1}>
            <div className={styles.text1}>
                <h1>LOREM IPSUM</h1>
                <p className={styles.title1}>Lorem ipsum dolor sit amet, em ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis auctor tellus. Ut id sapien augue. Pellentesque tincidunt urna in enim euismod dictum. Nunc metus nunc, pharetra quis risus tempor, imperdiet ultricies sapien. Nam vitae sagittis eros, in laoreet urna. Nulla vel egestas tellus. Morbi in dolor nec est porta viverra nec accumsan orci. Aliquam porttitor, quam in sodales pretium, ligula nulla faucibus sapien, quis tempor libero risus pellentesque massa. Nam rhoncus, nunc quis efficitur vulputate, orci diam tincidunt lorem, et placerat nibh metus in erat. Duis egestas erat a libero fermentum egestas. 
                </p>
                <p className={styles.items}><span className={styles.cross}>x</span>Lorem ipsum dolor sit amet</p>
                <p className={styles.items}><span className={styles.cross}>x</span>Class aptent taciti socioent per conubi, per inceptos himenaeos. </p>
                <p className={styles.items}><span className={styles.cross}>x</span> Aliquam massa lorem, porttitor congue tincidunt in</p>

            </div>
        </article>

        <article className={styles.article2}>
            <div className={styles.part1}>
              <div className={styles.slider}>
              <FontAwesomeIcon icon={faAngleLeft}  onClick={props.clickLeft}/>             
              <FontAwesomeIcon icon={faAngleRight}  onClick={props.clickRight}/>             

             </div>    
             
            
             {articles[props.counter]} 
             
               
            
           </div>
        </article>
       </div>
     );
}
 
export default Articles;