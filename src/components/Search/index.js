import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Search = ({value, onChange}) => {
    return (
        <input 
            className='search' 
            value={value} 
            onChange={onChange}
            placeholder='Pesquisar...'
            datatest-id="search"
        />
    );
}

Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Search;
