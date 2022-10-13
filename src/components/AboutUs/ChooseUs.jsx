import React from 'react';
import styles from "./ChooseUs.module.css"
import AboutUs from "./AboutUs";
import {aboutUs} from "../../constant";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ChooseUs = () => {


    return (
        <div>
            <h1 className={styles.us}>Почему выбирают нас:</h1>
            <div className={styles.one}>
                {
                    aboutUs.map((item, index) => {
                        return (

                            <AboutUs item={item}
                            />

                        )

                    })
                }
            </div>
        </div>
    )
        ;
};

export default ChooseUs;