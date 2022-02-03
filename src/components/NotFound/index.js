import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const NotFound = ({text}) => {
    return (
        <div>
            <span className='not-found'>{text}</span>
        </div>
    );
}

NotFound.propTypes = {
    text: PropTypes.string.isRequired
};

export default NotFound;
