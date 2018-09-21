import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slider from './slider.css'
import image from '../../images/blue.jpg'
import image2 from '../../images/alps.jpg'
import image3 from '../../images/sky.jpg'

const Slider = () => {
    return (      
        <div className="mt0 center">
           
            <AwesomeSlider>
                <div className="w-100 h-100">
                <caption className="f3 lh-copy center">
                Nagłówek
            </caption>
                    <img alt='image-slider-1' src={image} className="w-100 h-100" text="HELLO"/>
                 
                </div>
                
                <div className="w-100 h-100">
                <caption className="f3 lh-copy center">
                Nagłówek
            </caption>
                    <img  alt='resume' src={image2} className="w-100 h-100"/>
                </div>
                <div className="w-100 h-100"> 
                <caption className="f3 lh-copy center">
                Nagłówek
            </caption>
                <img  alt='resume' src={image3} className="w-100 h-100"/>
                </div>
                
            </AwesomeSlider>
        </div>   
      );
} 


export default Slider;