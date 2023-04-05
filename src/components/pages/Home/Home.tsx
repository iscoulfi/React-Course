import { useState, useEffect } from 'react';
import Card from '../../Home/Card/Card';
import SearchForm from '../../Home/SearchForm/SearchForm';
import axios from 'axios';
import { CardData } from '../../../types/formTypes';

const Home = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [cards, setCards] = useState<CardData[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character');
        setCards(data.results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [searchValue]);

  return (
    <>
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="cards">
          {cards.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
