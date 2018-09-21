import React from 'react';

import Feed from '../feed/feed';
import { Divider } from 'semantic-ui-react';

import ColorDivider from '../../images/relia_sol_divider.png'
import './news.css';
const News = () => {
    return (
        <div id="news">
        
            <h1 style={{paddingTop: "40px"}}
                        className="mt-2 f1 lh-title ph0 mh0 mb0">
                        Aktualności
            </h1>  
            <img className="mt2 grow" src={ColorDivider} alt="Reliability-Solutions" style={{maxWidth:100, maxHeight:100}}/>      
                <div className="pt4 flex flex-wrap">
                    <Feed id="feed"/>
                    <Feed id="feed"/>
                    <Feed id="feed"/>
                </div> 
                <div className="mt5">
                </div>                        
            
        </div>
    );
}

export default News;