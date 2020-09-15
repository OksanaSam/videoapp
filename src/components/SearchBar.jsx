import React, { Component } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export default class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <p>search</p>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">
              <input
                onChange={this.onInputChange}
                value={this.state.term}
                type="text"
                name=""
                id=""
              />
            </label>
          </div>
        </form>
        <Picker
          title="Pick your emoji…"
          emoji="point_up"
          onSelect={this.addEmoji}
          // style={{ position: 'absolute', bottom: '20px', right: '20px' }}
        />
      </div>
    );
  }
}
