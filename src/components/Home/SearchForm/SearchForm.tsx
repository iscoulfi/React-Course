import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchForm = ({ searchValue, setSearchValue }: SearchProps) => {
  const [value, setValue] = useState(searchValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('searchValue', value);
    setSearchValue(value);
  };

  return (
    <div className="root">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Search..."
          autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <AiOutlineSearch className="icon" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default SearchForm;
