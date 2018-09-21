import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import ProductCard from './productCard';
import DropdownSearchSelection from '../dropdown/dropdown';
import './products.css';

import ColorDivider from '../../images/relia_sol_divider.svg'

const companiesOptions = [ 
    { key: '1', value: 'AL', text: 'shimadzu' },
     { key: '2', value: 'AL', text: 'waters'},
     { key: '3', value: 'AL', text: 'agilent'}
];

const modelOptions = [ 
    { key: 'x', value: 'AL', text: 'model1' },
     { key: 'c', value: 'AL', text: 'model2'},
     { key: 'a', value: 'AL', text: 'model3'}
];


// {searchfield, searchChange}
const Products = () => {
    return(
        <div>
            <legend className="mt5 f1 fw6 ph0 mh0">Produkty</legend>
            <div>
                <img className="pt3" src={ColorDivider} alt="Reliability-Solutions" style={{maxWidth:100, maxHeight:100}}/> 
            </div>
            <div className="pt4">
                <p className="animated infinite hvr-grow-rotate mt2 f2 lh-copy fw6 ph0 mh0 pr5 pl5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt turpis<br /> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> 
                </p>    
            </div>                    
            <div className="flex flex-wrap">
                <div className="pt4 center">
                    <div className="pt3">
                        <p className="animated infinite hvr-pop mt5 f3 lh-copy fw6 ph0 mh0 pr5 pl5">
                                Lorem ipsum dolor sit amet, consectetur <br /> 
                                Lorem ipsum dolor sit amet<br /> 
                        </p>   
                        <div className="pt2  center">
                            <SearchBox />                                 
                        </div>                                
                    </div>         
                </div>
                <div className="pt4 center">
                    <div className="pt3">
                        <p className="animated infinite hvr-pop mt5 f3 fw6 ph0 mh0 pr5 pl5">
                                Lorem ipsum dolor sit amet, consectetur <br /> 
                                Lorem ipsum dolor sit amet<br /> 
                        </p>   
                        <div className="pt2 pl5 center">
                        <div className="pr5">
                            <DropdownSearchSelection text={'Producent'} options={companiesOptions}/>
                        </div>
                        <div>
                            <DropdownSearchSelection text={'Model'} options={modelOptions}/>                      
                        </div>                                
                    </div>         
                    </div>                                 
                </div>             
            </div>
            <div className="pt4">
                    <ProductCard /> 
                    <ProductCard /> 
                    <ProductCard /> 
                    <ProductCard />
                    <ProductCard /> 
            </div>             
                
                    <div className="mt5">
                </div>
        </div>
    );
}
export default Products;