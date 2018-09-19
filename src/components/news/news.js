import React from 'react';

import Feed from '../feed/feed';

const News = () => {
    return (
        <div id="">
            <header>
            <legend style={{paddingTop: "50px"}}
                        className="mt-2 f1 fw6 ph0 mh0">
                        Aktualności
                </legend>                 
                <div className="pt4 flex flex-wrap">
                    <Feed />
                    <Feed />
                    <Feed />
                </div> 
                <hr />                        
            </header>
        </div>
    );
}

export default News;