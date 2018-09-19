import React from 'react';
import Tilt from 'react-tilt'
import LogoImg from '../../images/logo.png'
import './Logo.css'

const Logo = () => {
    return (
              
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 400, width: 400 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop:'5px'}} alt='logo' src={LogoImg}/>                   
                </div>
            </Tilt>                  
      
    );
}

export default Logo;