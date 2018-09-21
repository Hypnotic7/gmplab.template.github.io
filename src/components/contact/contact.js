import React from "react";

import FacebookIcon from '../../images/facebook-icon.png';
import AddressIcon from '../../images/adres-icon.png';
import TelephoneIcon from '../../images/telephone-icon.png';
import ContactIcon from '../../images/contact-icon.png';

import './contact.css';

const Contact = () => {
    return (
        <footer className="contact white-80">
            <div className="pt3 flex flex-wrap">
                <div className="mt2 center">
                        <div className="mr0 mb4">
                            <legend className="mt-2 f2 lh-copy fw6 ph0 mh0">
                                    ADRES
                            </legend>
                            <div className="pt2 mt4 animated infinite hvr-wobble-top center">                                    
                                    <img src={AddressIcon} width="150" height="150" />                               
                            </div>   
                            <div className="flex flex-wrap">                                
                                <div className="center">
                                    <div className="pt4 f4 lh-copy">
                                        <ul>GMP LAB M.Kochanowska, M.Piskorz, P.Iwanek s.c.</ul>
                                        <ul>ul. Brodowicza 6/6</ul>
                                        <ul>31-518 Kraków</ul>
                                    </div>
                                </div>                                
                            </div>                                                
                        </div> 
                    </div>                
                <div className="center">
                    <div className="mr0 mb4">
                        <legend 
                                className="mt-2 f2 lh-copy fw6 ph0 mh0">
                                MEDIA SPOŁECZNOŚCIOWE
                        </legend>
                        <div className="center">
                            <div className="pt4 mt3 animated infinite hvr-grow-rotate">
                                <img src={FacebookIcon} width="200" height="200" />
                            </div>  
                        </div>
                        
                    </div>                   
                </div>
                <div className="center">
                    <div className="">
                        <legend 
                                className="mt-2 f2 lh-copy fw6 ph0 mh0">
                                DANE KONTAKTOWE
                        </legend>
                        <div className="pt2">
                        <div className="flex flex-wrap">
                            <div className="center">
                            <div className="pt3 animated infinite hvr-buzz-out">
                                <img src={TelephoneIcon} width="100" height="100" />                                  
                            </div>  
                            </div>
                              <div className="center">
                                <div className="pt2 f4 lh-copy">
                                    <ul>Małgorzata Kochanowska +48 794 00 23 44</ul>
                                    <ul>Marcin Piskorz +48 604 35 75 88</ul>
                                    <ul>Piotr Iwanek +48 601 76 54 32 </ul>                                     
                                </div>
                            </div>                   
                            
                        </div>                            
                        </div> 
                        <div className="pt3">
                        <div className="flex flex-wrap">
                            <div className="pt4 animated infinite hvr-pop">
                                    <img src={ContactIcon} width="100" height="100" />                                    
                                </div>                       
                            <div className="pt2 pl5 f3 lh-copy">
                                    <ul>biuro@gmplab.pl</ul>
                                    <ul>gosia@gmplab.pl</ul>
                                    <ul>marcin@gmplab.pl</ul>
                                    <ul>piotr@gmplab.pl</ul>                                   
                            </div>
                        </div>
                        </div>
                                               
                    </div> 
                </div>                
                <div className="">

                </div>
            </div>
        </footer>
        
    );
}

export default Contact;