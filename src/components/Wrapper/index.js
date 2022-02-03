import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Wrapper = ({children}) => {
    return (
        <div className='wrapper'>
            {children}
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
