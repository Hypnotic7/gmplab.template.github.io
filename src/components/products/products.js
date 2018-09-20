import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import ProductCard from './productCard';
import DropdownSearchSelection from '../dropdown/dropdown';

const companiesOptions = [ 
    { key: 'AL', value: 'AL', text: 'shimadzu' },
     { key: 'AL', value: 'AL', text: 'waters'},
     { key: 'AL', value: 'AL', text: 'agilent'}
];

const modelOptions = [ 
    { key: 'AL', value: 'AL', text: 'model1' },
     { key: 'AL', value: 'AL', text: 'model2'},
     { key: 'AL', value: 'AL', text: 'model3'}
];

// {searchfield, searchChange}
const Products = () => {
    return(
        <div>
            <legend 
                className="mt5 f1 fw6 ph0 mh0">
                PRODUKTY
            </legend>
            <legend className="mt5 f3 fw6 ph0 mh0 pr5 pl5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt turpis<br /> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt turpis 
            </legend>            
            <div className=" flex flex-wrap">
                <div className="center">
                <div className="pt3 animated infinite hvr-pop">
                    <legend className="mt5 f3 fw6 ph0 mh0 pr5 pl5">
                            Lorem ipsum dolor sit amet, consectetur <br /> 
                            Lorem ipsum dolor sit amet<br /> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt turpis 
                    </legend>   
                    <div className="pt2 pl5 center">
                    <SearchBox />                                 
                </div>                                
                </div>         
                </div>
                <div className="center">
                <div className="pt3 animated infinite hvr-pop">
                    <legend className="mt5 f3 fw6 ph0 mh0 pr5 pl5">
                            Lorem ipsum dolor sit amet, consectetur <br /> 
                            Lorem ipsum dolor sit amet<br /> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt turpis 
                    </legend>   
                    <div className="pt2 pl5 center">
                    <div className="pr5" value="0">
                        <DropdownSearchSelection text={'Producent'} options={companiesOptions}/>
                    </div>
                    <div>
                        <DropdownSearchSelection text={'Model'} options={modelOptions}/>                      
                    </div>                                
                </div>         
                </div>                                 
                </div>             
            </div>               
            <ProductCard /> 
                    <ProductCard /> 
                    <ProductCard /> 
                    <ProductCard />
                    <ProductCard /> 
                    <div className="mt5">
                    <hr />
                </div>
        </div>
    );
}
export default Products;