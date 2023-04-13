import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../redux/store';
import SearchForm from '../../Home/SearchForm/SearchForm';
import Card from '../../Home/Card/Card';
import Indicator from '../../Home/Indicator';
import { getCharactersByQuery } from '../../../redux/slices/search/asyncActions';

const Home = () => {
  const { searchValue, cards, statusCards } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharactersByQuery(searchValue));
  }, [searchValue, dispatch]);

  return (
    <>
      <SearchForm />
      {statusCards === 'loading' ? (
        <Indicator />
      ) : (
        <div>
          {cards.length > 0 ? (
            <div className="cards">
              {cards.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <div className="info">Characters not found!</div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
