import { useState, useEffect } from 'react';
import axios from 'axios';
import { CardData } from '../../../types/formTypes';
import SearchForm from '../../Home/SearchForm/SearchForm';
import Card from '../../Home/Card/Card';
import Indicator from '../../Home/Indicator';

const Home = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [cards, setCards] = useState<CardData[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${searchValue}`
        );
        setCards(data.results);
        setLoading(false);
      } catch (e) {
        setCards([]);
        setLoading(false);
      }
    })();
  }, [searchValue]);

  return (
    <>
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      {loading ? (
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
