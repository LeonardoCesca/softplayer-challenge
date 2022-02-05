import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { returnUpdateCharacter } from '../../redux/actions/characters';

import { AiFillEdit } from 'react-icons/ai';

const Edit = ({selectedCard}) => {
    const dispatch = useDispatch();
    const [modal, setModal] = React.useState(false);
    const [name, setName] = React.useState('');

    const handleEdit = () => {
        setModal(true);
        setName(selectedCard.name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(returnUpdateCharacter(selectedCard.id, name));
        setModal(false);
    };

    return (
        <>
            <AiFillEdit 
                className="edit" 
                title='Editar'
                onClick={handleEdit} 
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
                        type="text" 
                        value={name}
                        className='form__input'
                        onChange={(e) => setName(e.target.value)}
                        />
                    <input 
                        className='form__btn'
                        type="submit" 
                        value="Enviar" 
                    />
                </form> 
            )}
        </>
    );
}

export default Edit;
