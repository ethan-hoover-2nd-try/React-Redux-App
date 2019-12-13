import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCards } from '../actions';
import Card from './Card'

const CardList = props => {

    useEffect(() => {
        props.fetchCards();
    }, []);
    if (props.isFetching) {
        return <h2>Loading Magic The Gathering Cards...</h2>
    }
    return (
        <div className='card-list-container'>
            {props.error && <p>{props.error}</p>}
            {props.cardList.map(card => (
                <Card key={card.id} card={card} />
            ))}
            
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cardList: state.cardList,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchCards})(CardList)