import React from 'react';

const Card = () => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src="https://robohash.org/mum?150x150" alt="robots" />
            <div>
                <h2>John Doe</h2>
                <p>johndoe@gmail.com</p>
            </div>
        </div>
    )
}

export default Card;