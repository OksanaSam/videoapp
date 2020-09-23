import React, { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';
// import { Picker } from 'emoji-mart';

export default function SearchBar(props) {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    props.onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <p>search</p>
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="videoSearch">
            <input
              onChange={(e) => {
                setTerm(e.target.value);
              }}
              value={term}
              type="text"
              name=""
              id="videoSearch"
            />
          </label>
        </div>
      </form>
      {/* <Picker
          title="Pick your emoji…"
          emoji="point_up"
          onSelect={this.addEmoji}
        /> */}
    </div>
  );
}
