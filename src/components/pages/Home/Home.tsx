import React from 'react';
import Card from '../../Home/Card/Card';
import { products } from '../../../assets/data';
import SearchForm from '../../Home/SearchForm';

class Home extends React.Component {
  render() {
    return (
      <>
        <SearchForm />
        <div className="cards">
          {products.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </>
    );
  }
}

export default Home;
