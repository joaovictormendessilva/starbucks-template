import styles from './Home.module.css';

import Product from '../assets/img1.png';
import { useState } from 'react';
import { SlideButton } from '../components/SlideButton/SlideButton';

export function Home(){

    const [productImage, setProductImage] = useState(Product);
    const [background, setBackground] = useState('circleGreen')

    return(
        <div>
            <div className={styles.home}>
                <div className={styles.banner}>
                    <h1 className={styles.title}>
                        <span>It's not just coffee</span>
                        <span>It's <span className={styles.title_green}>Starbucks</span></span>
                    </h1>

                    <p className={styles.banner_description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Pariatur ipsam enim distinctio voluptate animi numquam doloremque 
                        consequuntur recusandae illum eos, laudantium explicabo nulla iste 
                        voluptates excepturi? Animi suscipit culpa reiciendis.
                    </p>

                    <button className={styles.btn_learn_more}>
                        LEARN MORE
                    </button>
                </div>

                <div className={styles.product_slide}>
                    <img src={productImage} alt="Milkshake" />
                </div>

                <div className={styles.social_medias}>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                </div>
                            
                <div className={styles[background]}></div> 

            </div>
            <SlideButton productImage={setProductImage} backgroundImg={setBackground}/>
        </div>
    );
};