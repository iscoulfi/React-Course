import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

class SearchForm extends React.Component {
  state = {
    value: localStorage.getItem('searchValue') || '',
  };

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.value);
  }

  handleChange = (event: React.FormEvent) => {
    this.setState({ value: (event.target as HTMLInputElement).value });
  };

  render() {
    return (
      <div className="root">
        <AiOutlineSearch className="icon" />
        <input
          className="input"
          type="search"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default SearchForm;
