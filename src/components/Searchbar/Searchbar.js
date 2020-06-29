import React, { Component } from 'react';
import './Searchbar.scss';

class Seacrchbar extends Component {
  state = {
    inputValue: '',
  };

  handelInputChange = e => {
    const { value } = e.currentTarget;
    this.setState({
      inputValue: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.reset();
  };

  reset = () => {
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={inputValue}
            // autocomplete="off"
            // autofocus
            onChange={this.handelInputChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Seacrchbar;
