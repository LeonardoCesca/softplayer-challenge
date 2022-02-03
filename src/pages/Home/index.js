import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { returnCharacters } from '../../redux/actions/characters';
import './style.scss';

import Card from '../../components/Card';
import Wrapper from '../../components/Wrapper';
import Search from '../../components/Search';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';

const Home = () => {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.charactersReducer.characters);
    const loading = useSelector((state) => state.charactersReducer.loadingCharacters);

    const [search, setSearch] = React.useState('');
    const [result, setResult] = React.useState([]);
    const [notFound, setNotFound] = React.useState(false);

    const handleChange = (value) => {
        setSearch(value);
    };

    const handleSearch = () => {
        setNotFound(false);
        if (search == '' && !notFound) {
            setResult([]);
            return characters;
        }
        searchCharacters();
    };

    const searchCharacters = () => {
        if (characters.filter((item) => item.name.toLowerCase().includes(search)).length) {
            return setResult(characters.filter((item) => item.name.toLowerCase().includes(search)));
        } else {
            return setNotFound(true);
        }
    };

    React.useEffect(() => {
        dispatch(returnCharacters());
    }, [dispatch, loading]);

    React.useEffect(() => {
        handleSearch();
    },[search]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Wrapper>
                    <section className='container-search'>
                        <Search value={search} onChange={handleChange} />
                    </section>
                    <section className='d-grid'>
                        {characters.length && result.length <= 0 && !notFound ? characters.map((item) =>
                            <Card 
                                key={item.id} 
                                name={item.name} 
                                thumbnail={item.thumbnail} 
                                id={item.id} 
                                routeDetail="detalhe"
                            />    
                        ):(
                            <>
                                {result.length && !notFound && result.map((item) => 
                                    <Card 
                                        key={item.id} 
                                        name={item.name} 
                                        thumbnail={item.thumbnail} 
                                        id={item.id} 
                                        routeDetail="detalhe"
                                    />    
                                )}
                            </>
                        )}
                        {notFound && (
                            <NotFound text="Nenhuma busca encontrada." />
                        )}
                    </section>
                </Wrapper>  
            )}
        </>
    );
}

export default Home;
