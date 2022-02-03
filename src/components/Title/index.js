import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Title = ({children}) => {
  return (
    <h1 className="title">{children}</h1>
  );
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Title;
