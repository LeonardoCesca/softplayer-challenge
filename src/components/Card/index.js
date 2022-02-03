import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { AiFillEdit } from 'react-icons/ai';
import { BsInfoSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Card = ({name, thumbnail, id, routeDetail}) => {
    return (
        <div className='card'>
            <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className='card__image' />
            <p className='card__title'>{name}</p>
            <div className='card__icons'>
                <AiFillEdit />
                <Link to={`${routeDetail}/${id}`}>
                    <BsInfoSquare />
                </Link>
            </div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    routeDetail: PropTypes.string.isRequired,
    thumbnail: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
};

export default Card;
