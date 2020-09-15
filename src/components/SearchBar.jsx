import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

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
        <p>search</p>
      </div>
    );
  }
}
