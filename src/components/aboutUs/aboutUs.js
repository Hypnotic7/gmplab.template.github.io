import React from 'react';
import Logo from '../logo/logo';
const AboutUs = () => {
    return (
        <div >
                <legend style={{paddingTop: "50px"}}
                        className="mt-2 f1 fw6 ph0 mh0">
                        O nas
                </legend> 
                <div className="pt4 flex flex-wrap"> 
                    <div >
                    <Logo />
                        </div>                   
                    
                     <div >
                     <label style= {{paddingTop: "15px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt turpis et nulla vulputate tempor. Praesent felis nulla, ultricies ut tortor ac, lacinia ullamcorper elit. Aliquam convallis consequat turpis eget vehicula. Nullam dictum urna ac purus volutpat, vel accumsan arcu ultrices. Etiam nec sodales ante, quis tincidunt nisi. Curabitur dapibus diam at diam hendrerit euismod. Donec ut aliquet lacus. Cras viverra sagittis felis. Pellentesque id nibh et ex bibendum tincidunt eget ac leo. Proin sapien eros, vehicula in egestas nec, maximus quis urna. Aliquam eget pellentesque leo, ut malesuada urna.
                            </label>     
                    </div>        
                         
                </div>
        </div>
    );
}

export default AboutUs;