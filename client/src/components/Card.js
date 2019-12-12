import React from 'react';

const Card = props => {
    if (props.card.image_uris) {
        return (
            <div className='card-container'>
                <img src={props.card.image_uris.small} alt='Card' />
            </div>
        )
    } else {
        return (
            null
        )
    }

};

export default Card;