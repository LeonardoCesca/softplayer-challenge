import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Search = ({value, onChange}) => {

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <input className='search' value={value} onChange={handleChange}/>
    );
}

Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Search;
