import React from 'react';
import Card from './Card';

const CardList = ({
    robots
}) => {
    /*
    // lets throw and error
    if (true) {
        throw new Error('Noooooooooo!');
    } */
    // Moves through the respective indexes, and returns their values
    const cardArray = robots.map((user, i) => {
        return <Card key = {
            i
        }
        id = {
            robots[i].id
        }
        name = {
            robots[i].name
        }
        email = {
            robots[i].email
        }
        />
    })
    return ( <
        div >

        {
            cardArray
        } <
        /div>
    )
}


export default CardList;

// or

// This also works
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