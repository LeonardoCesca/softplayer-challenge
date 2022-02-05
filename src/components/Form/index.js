import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { returnUpdateCharacter } from '../../redux/actions/characters';

const Form = ({infos}) => {
    const dispatch = useDispatch();
    const [name, setName] = React.useState('');
    const [modal, setModal] = React.useState(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(returnUpdateCharacter(infos.id, name));
        setModal(false);
    };

    React.useEffect(() => {
        if(infos) setName(infos.name);
    }, []);

    return (
        <>
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

export default Form;
