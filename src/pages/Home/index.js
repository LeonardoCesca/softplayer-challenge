import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { returnCharacters } from "../../redux/actions/characters";
import "./style.scss";

import Card from "../../components/Card";
import Wrapper from "../../components/Wrapper";
import Search from "../../components/Search";
import NotFound from "../../components/NotFound";
import Loading from "../../components/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.charactersReducer.characters);
  const loading = useSelector((state) => state.charactersReducer.loadingCharacters);
  const isEdited = useSelector((state) => state.charactersReducer.isEdited);

  const [search, setSearch] = React.useState("");
  const [result, setResult] = React.useState([]);
  const [notFound, setNotFound] = React.useState(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const searchCharacters = React.useCallback(() => {
    if (characters.filter((item) => item.name.includes(search)).length) {
      return setResult(characters.filter((item) => item.name.includes(search)));
    } else {
      return setNotFound(true);
    }
  }, [characters, search]);

  const handleSearch = React.useCallback(() => {
    setNotFound(false);
    if (search === "" && !notFound) {
      setResult([]);
      return characters;
    }
    searchCharacters();
  }, [search, notFound, characters, searchCharacters]);

  React.useEffect(() => {
    if (!isEdited) dispatch(returnCharacters());
  }, [dispatch, loading, isEdited]);

  React.useEffect(() => {
    handleSearch();
  },[search, handleSearch]);

  return (
    <>
      {loading ? (
          <Loading />
      ) : (
        <Wrapper>
          <section className="container-search">
            <Search value={search} onChange={handleChange} />
          </section>
          <section className="d-grid">
              {characters.length && result.length <= 0 && !notFound ? (
                <Card cards={characters} />    
              ):(
                <>
                  {result.length > 0 && !notFound && (
                    <Card 
                      cards={result}
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
