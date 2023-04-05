import { useState, useEffect } from 'react';
import Card from '../../Home/Card/Card';
import { products } from '../../../assets/data';
import SearchForm from '../../Home/SearchForm/SearchForm';

const Home = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <>
      <SearchForm setSearchValue={setSearchValue} />
      <div className="cards">
        {products.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Home;
