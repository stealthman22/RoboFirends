import React from 'react';
import Card from './Card';

const CardLsit = ({ robots }) => {
    // Moves through the respective indexes, and returns their values
    const cardArray = robots.map((user, i) => {
        return <Card key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email} />
    })
    return (
        <div>

            {cardArray}
        </div>
    )
}


export default CardLsit;

// or

/* const CardLsit = ({ robots }) => {
    // Moves through the respective indexes, and returns their values

    return (

        <div>
            {
                robots.map((user, i) => {
                    return (<Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email} />
                    )
                })
            }
        </div>
    )
}
 */