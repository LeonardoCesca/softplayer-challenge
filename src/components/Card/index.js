import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
import { BsInfoSquare } from 'react-icons/bs';

import Edit from '../Edit';

const Card = ({cards}) => {
    return (
        <>
            {cards.map((item) => (
                <div className='card' key={item.id}>
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} className='card__image' />
                    <p className='card__title'>{item.name}</p>
                    <div className='card__icons'>
                        <Edit selectedCard={{id: item.id, name: item.name}} />
                        <Link to={`detalhe/${item.id}`}>
                            <BsInfoSquare title='Detalhes' />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

Card.propTypes = {
    cards: PropTypes.array.isRequired
};

export default Card;
