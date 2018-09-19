import React from 'react';
import PolishIcon from '../../images/poland-flag-round-icon-32.png';
import UKIcon from '../../images/united-kingdom-flag-round-icon-32.png';

const Languages = () => {
    return (
            <div>
                <img  alt='pl-icon' src={PolishIcon}/>
                <img style={{paddingLeft: "10px"}}alt='uk-icon' src={UKIcon}/>
            </div> 
    );
}

export default Languages;