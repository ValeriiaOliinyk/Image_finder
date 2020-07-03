import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.scss';

class Seacrchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

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
            onChange={this.handelInputChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Seacrchbar;
