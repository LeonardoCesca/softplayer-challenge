import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const List = ({list}) => {
    return (
        <>
            {list !== undefined && list.map(({series}, index) => (
                <React.Fragment key={index}>
                    {series !== undefined && series.items.length ? (
                        <ul className='list' key={index}>
                            {series.items.map(({name}) => (
                                <li key={name} className='list__item'>{name}</li>
                            ))}
                        </ul>
                    ):(
                        <p className="list__empty">Nenhuma serie encontrada</p>
                    )}
                </React.Fragment>
            ))}
        </>
    );
}

List.propTypes = {
    list: PropTypes.array.isRequired,
};

export default List;
