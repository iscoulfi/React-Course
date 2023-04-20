import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useAppSelector, useAppDispatch } from '../../../redux/store';
import { setSearchValue } from '../../../redux/slices/search/slice';

const SearchForm = () => {
  const { searchValue } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(searchValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setSearchValue(value));
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
