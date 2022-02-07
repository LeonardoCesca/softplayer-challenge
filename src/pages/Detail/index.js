import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { isLoadingCharacterById, returnCharacterById } from "../../redux/actions/characters";

import Title from "../../components/Title";
import Wrapper from "../../components/Wrapper";
import Loading from "../../components/Loading";
import List from "../../components/List";

import "./style.scss";

const Detail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.charactersReducer.currentCharacter);
  const loading = useSelector((state) => state.charactersReducer.loadingCurrentCharacter);
  const [visible, setVisible] = React.useState(true);

  React.useMemo(() => {
    const setDispatchs = () => {
      dispatch(isLoadingCharacterById(true));
      dispatch(returnCharacterById(id));
    }
    setDispatchs();
  }, [dispatch, id]);

  React.useEffect(() => {
    setTimeout(() => {
      setVisible(loading);
    }, 200);
  }, [loading])

  React.useEffect(() => {
    if (detail === undefined) return null;
  }, [detail]);

  return (
    <>
      <Title>Detalhes</Title>
      {visible ? (
        <Loading />
      ):(
        <Wrapper>
          {Array.isArray(detail) && detail.map(item => (
            <section className="detail" key={item.id}>
              <div className="detail__container">
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} className="detail__image"/>
                <div className="detail-infos">
                  <h3 className="detail-infos__title">{item.name}</h3>
                  <p className="detail-infos__description">{item.description ? item.description : "Nenhuma descrição encontrada."}</p>
                </div>
              </div>
            </section>
          ))}
          <section className="series">
            <Title>Series</Title>
            <List list={detail} />
          </section>
        </Wrapper>
      )}
    </>
  );
}

export default Detail;
