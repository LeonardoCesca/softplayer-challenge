import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { returnCharacters } from '../../redux/actions/characters';

import Card from '../../components/Card';
import Wrapper from '../../components/Wrapper';

const Home = () => {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.charactersReducer.characters);
    const loading = useSelector((state) => state.charactersReducer.loadingCharacters);

    React.useEffect(() => {
        dispatch(returnCharacters());
    }, [dispatch, loading])

    return (
        <>
            {loading ? (
                <>carregando...</>
            ) : (
                <Wrapper>
                    <div className='d-grid'>
                        {characters.length > 0 && characters.map((item, i) =>
                            <Card key={i} name={item.name} thumbnail={item.thumbnail} />    
                        )}
                    </div>
                </Wrapper>  
            )}
        </>
    );
}

export default Home;
