import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  const inputValue = useRef(searchValue);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', inputValue.current);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    inputValue.current = event.target.value;
  };
  return (
    <div className="root">
      <AiOutlineSearch className="icon" />
      <input
        className="input"
        type="search"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchForm;
