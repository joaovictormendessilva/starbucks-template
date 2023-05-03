import styles from './SlideButton.module.css';

import Thumb1 from '../../assets/thumb1.png'
import Thumb2 from '../../assets/thumb2.png'
import Thumb3 from '../../assets/thumb3.png'

import Product1 from '../../assets/img1.png';
import Product2 from '../../assets/img2.png';
import Product3 from '../../assets/img3.png';

export function SlideButton({ productImage, backgroundImg }){

   

    return (
        <div className={styles.slide_button}>
            <button>
                <img src={Thumb1} alt="" onClick={() => {productImage(Product1); backgroundImg('circleGreen')}}/>
            </button>
            <button>
                <img src={Thumb2} alt="" onClick={() => {productImage(Product2); backgroundImg('circleLightPink')}}/>
            </button>
            <button>
                <img src={Thumb3} alt="" onClick={() => {productImage(Product3); backgroundImg('circlePink')}}/>
            </button>
        </div>
    );
};