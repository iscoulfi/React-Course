import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchInput } from '../../../types/formTypes';

interface SearchProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchForm = ({ setSearchValue }: SearchProps) => {
  const { register, reset, handleSubmit } = useForm<SearchInput>();

  useEffect(() => {
    reset({
      searchField: localStorage.getItem('searchValue') || '',
    });
  }, [reset]);

  const onSubmit: SubmitHandler<SearchInput> = (data) => {
    localStorage.setItem('searchValue', data.searchField);
    setSearchValue(data.searchField);
  };

  return (
    <div className="root">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          type="text"
          placeholder="Search..."
          autoComplete="off"
          {...register('searchField')}
        />
        <AiOutlineSearch className="icon" onClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
};

export default SearchForm;
