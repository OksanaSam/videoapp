import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './Apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
// require('dotenv').config();

class App extends Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
