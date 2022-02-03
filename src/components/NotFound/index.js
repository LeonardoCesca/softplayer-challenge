import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const NotFound = ({text}) => {
    return (
        <div className='not-found'>
            <span className='not-found__text'>{text}</span>
        </div>
    );
}

NotFound.propTypes = {
    text: PropTypes.string.isRequired
};

export default NotFound;
