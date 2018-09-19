import React from 'react';
import image from '../../images/blue.jpg';

const Feed = () => {
    return (        
            <div className="center pt3">
                    <div className="br3 ba b--black-10  w-100 w-100-m w-25-l mw6 shadow-5">
                    <main className="pa4 black-80">                                       
                            <div className="w-100 h-100">
                                <img  alt='image-slider-1' src={image} className="w-100 h-100"/>
                            </div>
                            <label style= {{paddingTop: "15px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt turpis et nulla vulputate tempor. Praesent felis nulla, ultricies ut tortor ac, lacinia ullamcorper elit. Aliquam convallis consequat turpis eget vehicula. Nullam dictum urna ac purus volutpat, vel accumsan arcu ultrices. Etiam nec sodales ante, quis tincidunt nisi. Curabitur dapibus diam at diam hendrerit euismod. Donec ut aliquet lacus. Cras viverra sagittis felis. Pellentesque id nibh et ex bibendum tincidunt eget ac leo. Proin sapien eros, vehicula in egestas nec, maximus quis urna. Aliquam eget pellentesque leo, ut malesuada urna.
                            </label>               
                            <div className="pt2">
                                <input                                     
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Przeczytaj"
                                />
                            </div>                         
                    </main>
                    </div>                    
            </div>      
    );
}

export default Feed;