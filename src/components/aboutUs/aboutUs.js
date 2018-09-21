import React from 'react';
import Logo from '../logo/logo';
import image from '../../images/blue.jpg';

import ColorDivider from '../../images/relia_sol_divider.png'
import { Divider } from 'semantic-ui-react';

// import './aboutUs.css';
const AboutUs = () => {
    return (
        <div id="aboutUs">
          
        <Divider />
                <legend style={{paddingTop: "50px"}}
                        className="mt-2 f1 fw6 ph0 ">
                        O nas
                </legend>
               
                <img className="pt3" src={ColorDivider} alt="Reliability-Solutions" style={{maxWidth:100, maxHeight:100}}/> 
                <div className="pt4">
                <p className="animated infinite hvr-grow-rotate mt2 f2 lh-copy fw6 ph0 mh0 pr5 pl5">
                GMP LAB s.c. powstała w sierpniu 2018 roku jako odpowiedź na rosnące zapotrzebowanie<br/>
                 na specjalistyczne meble do laboratoriów chemicznych i szybko stała się<br /> 
                  wypełnieniem niszy w tej branży na rynku polskim.<br /> 
                </p>    
            </div> 
                <div className="pt4 flex flex-wrap">
                <div className="center pt4">
                    <Logo />  
                    </div>                            
                     <div className="center pt4">
                    <div className="br3 ba b--black-10  w-100 w-100-m w-25-l mw6 shadow-5">
                    <main className="pa4 black-80">                                       
                            <p style= {{paddingTop: "15px" }} className="f4 lh-copy" >
                            Misją firmy GMP LAB jest tworzenie mebli i akcesoriów laboratoryjnych na wymiar, pod konkretne, często nietypowe zastosowania. Pracujemy ze wszystkimi tworzywami sztucznymi, aluminium, stalą, laminatami - są to materiały najwyższej jakości od sprawdzonych dostawców. Nasze produkty w wysokim stopniu wyciszają pracę urządzeń laboratoryjnych, chłodząc je od środka za pomocą wentylatorów. Cechuje nas olbrzymia elastyczność - każdy Klient to dla nas osobne wyzwanie, które realizujemy pod jego dyktando dostarczając gotowy produkt w krótkim czasie. Współpracujemy ze znanymi na rynku chemicznymi laboratoriami oraz największymi na rynku producentami sprzętu laboratoryjnego. Polecamy siebie i nasze produkty! GMP LAB M.Kochanowska, M.Piskorz, P.Iwanek s.c.
                            </p>             
                    </main>
                    </div>                    
            </div>          
                 
                </div> 
                <div className="mt5">
                    <hr />
                </div>
                
             
        </div>
    );
}

export default AboutUs;