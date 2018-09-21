import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import ProductCard from '../products/productCard';
import DropdownSearchSelection from '../dropdown/dropdown';
// import './products.css';

import ColorDivider from '../../images/relia_sol_divider.png'

// {searchfield, searchChange}
const Offer = () => {
    return(
        <div>
            <legend className="mt5 f1 fw6 ph0 mh0">Oferty</legend>
            <div>
                <img className="pt3" src={ColorDivider} alt="Reliability-Solutions" style={{maxWidth:100, maxHeight:100}}/> 
            </div>
                  
            <div className="flex flex-wrap">
                <div className="pt5 center">
                    <div className="pt3">
                      <div className="pt4">
                <p className="animated infinite hvr-grow-rotate mt2 f1 lh-copy fw6 ph0 mh0 pr5 pl5">
                    Lorem ipsum dolor sit amet,<br /> 
                    consectetur adipiscing elit.<br /> 
                    Sed tincidunt turpis amet.<br /> 
                    consectetur adipiscing elit.<br /> 
                </p>    
            </div>                          
                    </div>         
                </div>
                <div className="pt4 center">
                    <div className="pt3">
                    <ProductCard />                      
                </div>             
            </div>
            </div>           
                
                    <div className="mt5">
                        <hr/>
                </div>
        </div>
    );
}
export default Offer;