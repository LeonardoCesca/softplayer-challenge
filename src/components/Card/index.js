import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { AiFillEdit } from 'react-icons/ai';
import { BsInfoSquare } from 'react-icons/bs';

const Card = ({name, thumbnail}) => {

    return (
        <div className='card'>
            <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className='card__image' />
            <p className='card__title'>{name}</p>
            <div className='card__icons'>
                <AiFillEdit />
                <BsInfoSquare />
            </div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    thumbnail: PropTypes.object
};

export default Card;
