import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { returnCharacterById } from '../../redux/actions/characters';

import Title from '../../components/Title';
import Wrapper from '../../components/Wrapper';

import './style.scss';

const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.charactersReducer.currentCharacter);
  const loading = useSelector((state) => state.charactersReducer.loadingCurrentCharacter);

  React.useEffect(() => {
    dispatch(returnCharacterById(id));
  }, [dispatch, loading]);
  
  return (
    <div>
      {loading ? (
        <>carregando...</>
      ) : (
        <Wrapper>
          {detail.map(item => (
            <section className='detail' key={item.id}>
              <Title>Detalhes</Title>
              <div className='detail__container'>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} className='detail__image'/>
                <div className='detail__infos'>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </section>
          ))}
        </Wrapper>
      )}
    </div>
  );
}

export default Detail;
