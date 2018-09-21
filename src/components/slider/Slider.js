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
                <div className="w-100 h-100" style={{backgroundColor:'#364859'}}>
                    <div>
                        <caption className="f3 lh-copy center white">
                            Nagłówek
                        </caption>
                    </div>
                   <div>
                     <img alt='image-slider-1' src={image} className="w-100 h-100" text="HELLO"/>
                   </div>
                    
                 
                </div>
                
                <div className="w-100 h-100" style={{backgroundColor:'#364859'}}>
                    <div>
                        <caption className="f3 lh-copy center white">
                                        Nagłówek
                                    </caption>
                    </div>
                    <div>
                    <img  alt='resume' src={image2} className="w-100 h-100"/>
                    </div>
                   
                </div>
                <div className="w-100 h-100"> 
                <caption className="f3 lh-copy center white" style={{backgroundColor:'#364859'}}>
                Nagłówek
            </caption>
                <img  alt='resume' src={image3} className="w-100 h-100"/>
                </div>
                
            </AwesomeSlider>
        </div>   
      );
} 


export default Slider;