import React from 'react';
import {Collapse} from 'react-collapse';

// {name,email,id}
class ProductCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: false
        }
    }

    render(){
        return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw1 shadow-5' onClick={() => this.setState({open: !this.state.open})}>
                <img alt='robots' src={`https://robohash.org/1?200x200`} />
            <div>                
            <div className="mt2">
                <h2 className="f2 lh-copy">Produkt</h2>
                <p className="f3 lh-copy">Podtytul</p>  
                <Collapse isOpened={this.state.open} style={{maxWidth:300}}>
                   <div>
                        <p className="center f4 lh-copy pl2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt turpis et nulla vulputate tempor. Praesent felis nulla, ultricies ut tortor ac, lacinia ullamcorper elit. Aliquam convallis consequat turpis eget vehicula. Nullam dictum urna ac purus volutpat, vel accumsan arcu ultrices. Etiam nec sodales ante, quis tincidunt nisi. Curabitur dapibus diam at diam hendrerit euismod. Donec ut aliquet lacus. Cras viverra sagittis felis. Pellentesque id nibh et ex bibendum tincidunt eget ac leo. Proin sapien eros, vehicula in egestas nec, maximus quis urna. Aliquam eget pellentesque leo, ut malesuada urna.
                        </p>                        
                   </div>
                   <div className="mt3 center">
                        <div className="ui secondary button" tabIndex="0">Wypełnij Formularz</div>
                   </div>                   
                </Collapse>                  
            </div>

                </div>
            </div>             
        );
    }
}

export default ProductCard;