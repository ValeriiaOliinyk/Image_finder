import React, { Component } from 'react';
import Seacrchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import picturesApi from './services/pictures-api';
import './App.scss';

class App extends Component {
  state = {
    pictures: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }
  }

  formSubmit = data => {
    this.setState({
      searchQuery: data,
      currentPage: 1,
      pictures: [],
      error: null,
    });
  };

  fetchPictures = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      currentPage,
      searchQuery,
    };

    this.setState({ isLoading: true });

    picturesApi
      .fetchPictures(options)
      .then(hits => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { pictures, isLoading, error } = this.state;
    const shouldRenderLoadMoreBtn = pictures.length > 0 && !isLoading;
    return (
      <>
        {error && <div>Something went wrong please try again</div>}
        <Seacrchbar onSubmit={this.formSubmit} />

        <ImageGallery images={pictures} />

        {isLoading && <h1>Loading...</h1>}
        {shouldRenderLoadMoreBtn && (
          <button type="button" onClick={this.fetchPictures}>
            Load more
          </button>
        )}
      </>
    );
  }
}

export default App;
