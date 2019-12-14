import React from "react";
// import logo from './../images/logo.png'
import restaurant from './../images/cafe-3537801_1920.jpg';
import restaurant2 from './../images/wine-1761613_1920.jpg';
import restaurant3  from './../images/platter-2009590_1920.jpg'


import styles from './Header.module.scss'
import { faFish} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({changeMenu}) => {
 
    return ( 
        <div className={styles.header}>
            <div className={styles.logoDiv}>
            <div className={styles.title}> 
             <span className={styles.name}>BIG FAT FISH </span> restaurant 
            </div>
            <FontAwesomeIcon icon={faFish} onClick={changeMenu} />
            </div>
            <div className={styles.restaurant}>
            <img src={restaurant}  alt='mainPicture'/>
            <img src={restaurant2}  alt='mainPicture2'/>
            <img src={restaurant3} alt='mainPicture3'/>
            </div>
            
            
            <div className={styles.menu}  id="menu">
                <ul>
                    <li>Home</li>
                    <li className={styles.line}>|</li>
                    <li>Form</li>
                    <li className={styles.line}>|</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;