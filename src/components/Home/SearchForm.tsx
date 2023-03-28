import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  const inputValue = useRef('');

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', inputValue.current);
    };
  }, []);

  useEffect(() => {
    inputValue.current = searchValue;
  }, [searchValue]);

  const handleChange = (event: React.FormEvent) => {
    setSearchValue((event.target as HTMLInputElement).value);
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
