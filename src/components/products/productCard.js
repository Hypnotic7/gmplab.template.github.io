import React from 'react';

// {name,email,id}
const ProductCard = () => {
    return (
        <div  className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/1?200x200`} />
            <div>
                <h2>Heniek</h2>
                <p>Sztafeta</p>
            </div>
        </div>             
    );
}

export default ProductCard;