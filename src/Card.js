import React from 'react';
/* 
const Card = (props) => {
    return (
        <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
           
            <img src={`https://robohash.org/${props.id}?150x150`} alt="robots" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
} */

// or

/* const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?150x150`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

 */

// or 

const Card = ({ name, email, id }) => {
    return (
        <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/*  Wrapping in template strings */}
            <img src={`https://robohash.org/${id}?150x150`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;