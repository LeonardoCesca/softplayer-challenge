import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { AiFillEdit } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { returnUpdateCharacter } from '../../redux/actions/characters';

const Edit = ({selectedCard}) => {
    const dispatch = useDispatch();
    const [name, setName] = React.useState('');
    const [modal, setModal] = React.useState(false);

    const handleEdit = () => {
        setName(selectedCard.name);
        setModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(returnUpdateCharacter(selectedCard.id, name));
        setModal(false);
    };

    return (
        <>
            <AiFillEdit 
                className='edit'
                title='Editar'
                onClick={handleEdit}
                datatest-id="edit-btn"
            />

            {modal && (
                <form 
                className='form'
                onSubmit={(e) => handleSubmit(e)}
                >
                    <h3 className='form__title'>Editar</h3>
                    <label htmlFor={name} className='form__label'>Nome</label>
                    <input 
                        id={name}
                        type='text'
                        value={name}
                        className='form__input'
                        onChange={(e) => setName(e.target.value)}
                        data-testid="edit"
                        />
                    <input 
                        className='form__btn'
                        type='submit' 
                        value='Enviar' 
                    />
                    <span className='edit__close' onClick={() => setModal(false)}>X</span>
                </form> 
            )}
        </>
    );
}

Edit.propTypes = {
    selectedCard: PropTypes.object.isRequired
};

export default Edit;
