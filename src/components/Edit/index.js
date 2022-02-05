import React from 'react';
import './style.scss';

import { AiFillEdit } from 'react-icons/ai';
import Form from '../Form';

const Edit = ({selectedCard}) => {
    const [modal, setModal] = React.useState(false);

    const handleEdit = () => {
        setModal(true);
    };

    return (
        <>
            <AiFillEdit 
                className="edit" 
                title='Editar'
                onClick={handleEdit} 
            />

            {modal && (
                <Form infos={selectedCard} />
            )}
        </>
    );
}

export default Edit;
